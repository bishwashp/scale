import { GoogleGenAI } from "@google/genai";

// Simple in-memory rate limiter
// Note: In serverless, this state might reset if the function scales down, 
// but it works well for basic flood protection on a single instance.
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute
const requestCounts = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  // Get existing requests for this IP
  let requests = requestCounts.get(ip) || [];

  // Filter out old requests to keep memory clean
  requests = requests.filter(timestamp => timestamp > windowStart);

  if (requests.length >= MAX_REQUESTS) {
    return true;
  }

  // Add current request
  requests.push(now);
  requestCounts.set(ip, requests);
  
  return false;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Rate Limiting Check
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please slow down.' });
  }

  const { prompt, systemPrompt } = req.body;

  if (!process.env.GOOGLE_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
    const model = "gemini-2.5-flash";

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return res.status(200).json(JSON.parse(text));

  } catch (error) {
    console.error("Error in Vercel Function:", error);
    return res.status(500).json({ 
      error: 'Failed to generate content', 
      details: error.message 
    });
  }
}
