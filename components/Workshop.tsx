import React, { useState } from 'react';
import { NeoButton } from './NeoButton';
import { improvePromptWithScale } from '../services/geminiService';
import { PromptFeedback } from '../types';
import { ArrowRight, RefreshCcw, Wand2 } from 'lucide-react';

export const Workshop: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PromptFeedback | null>(null);

  const handleOptimize = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const feedback = await improvePromptWithScale(input);
    setResult(feedback);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      {/* Input Zone */}
      <div className="flex flex-col gap-4">
        <div className="bg-black text-white p-4 border-4 border-white neo-shadow">
          <h3 className="text-xl font-bold font-mono flex items-center gap-2">
            <RefreshCcw className="animate-spin-slow" />
            INPUT: WEAK PROMPT
          </h3>
        </div>
        <textarea 
          className="w-full h-64 p-6 border-4 border-black font-mono text-lg focus:outline-none focus:bg-yellow-50 resize-none neo-shadow-sm"
          placeholder="e.g., 'Make me a voxel app with React...'"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <NeoButton onClick={handleOptimize} disabled={loading || !input} className="flex justify-between items-center">
          {loading ? 'ENGINEERING...' : 'APPLY S.C.A.L.E. FRAMEWORK'}
          <Wand2 />
        </NeoButton>
      </div>

      {/* Output Zone */}
      <div className="flex flex-col gap-4">
         <div className="bg-[#A3E635] text-black p-4 border-4 border-black neo-shadow">
          <h3 className="text-xl font-bold font-mono flex items-center gap-2">
            <ArrowRight />
            OUTPUT: GOLDEN PROMPT
          </h3>
        </div>
        <div className="w-full h-64 md:h-auto md:flex-1 bg-white border-4 border-black p-6 overflow-y-auto relative font-mono text-sm neo-shadow-sm">
           {result ? (
             <div className="space-y-4">
                <div className="border-b-2 border-dashed border-black pb-4 mb-4">
                    <span className="bg-black text-white px-2 text-xs font-bold">ANALYSIS</span>
                    <p className="mt-2 italic">{result.analysis}</p>
                </div>
                <div className="whitespace-pre-wrap">
                    {result.improved}
                </div>
             </div>
           ) : (
             <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                <p>WAITING FOR INPUT...</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};