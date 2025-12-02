import { PromptFeedback } from "../types";

export const improvePromptWithScale = async (userPrompt: string): Promise<PromptFeedback> => {

  const systemPrompt = `
    You are an expert Prompt Engineer using the S.C.A.L.E. Framework.
    Your task is to take a basic user idea and rewrite it into a "Golden Prompt".
    
    The goal is clarity and simplicity. Avoid overly academic jargon.
    
    S.C.A.L.E stands for:
    S - Specific Tools (Stack)
    C - Clear Limits (Constraints)
    A - Aesthetic Vibe
    L - Logical Flow
    E - Example Code
    
    IMPORTANT: You must also add a "Safety & Review" section to the generated prompt.
    - Safe-Fail: Define what happens if the app errors.
    - Review Loop: Ask the AI to review its code for bugs before finishing.
    
    Return the response as a purely JSON object with the following structure:
    {
      "original": "The user's input",
      "improved": "The rewritten, robust prompt using S.C.A.L.E. and Error protocols.",
      "analysis": "A simple explanation of why this is better."
    }
    Do not include markdown code blocks in the response, just the raw JSON string.
  `;

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `
        User Idea: "${userPrompt}"
        
        Rewrite this using S.C.A.L.E.
        
        [S] Specific Tools: (Pick the best modern libraries for this task)
        [C] Clear Limits: (What should it NOT do?)
        [A] Aesthetic Vibe: (Visual style keywords)
        [L] Logical Flow: (Step-by-step usage)
        [E] Example Code: (A tiny snippet relevant to the stack)
        [+] Safety & Review: (Add Safe-Fail rule and Review Loop)
      `,
        systemPrompt: systemPrompt
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || response.statusText);
    }

    const data = await response.json();
    return data as PromptFeedback;

  } catch (error) {
    console.error("Error improving prompt:", error);
    return {
      original: userPrompt,
      improved: "Error contacting the Prompt Architect. Please try again.",
      analysis: "System Failure: " + (error instanceof Error ? error.message : String(error))
    };
  }
};