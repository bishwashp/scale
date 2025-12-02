import React from 'react';

export const EditorialFeedback: React.FC = () => {
  return (
    <div className="bg-yellow-50 p-8 border-4 border-black neo-shadow relative mt-12">
        <div className="absolute -top-6 -left-6 bg-black text-white p-4 border-4 border-white shadow-lg rotate-[-2deg]">
            <h2 className="text-2xl font-black font-mono">THE REVIEW</h2>
        </div>
        
        <div className="mt-8 space-y-8">
            <div>
                <h3 className="text-3xl font-bold mb-4 uppercase underline decoration-4 decoration-pink-500">Constructive Feedback</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Your <span className="font-bold">S.C.A.L.E. framework</span> is exceptionally strong for <i>initialization</i>. It treats the LLM as a senior partner, which is the correct mental model. The "Voxel Toy Box" example effectively demonstrates how specificity leads to quality.
                </p>
                <p className="text-lg leading-relaxed">
                    However, software development is rarely "one-shot". To make this the <span className="bg-black text-white px-2">ULTIMATE</span> advice, we must address the <strong>Lifecycle of the Interaction</strong>.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-4 border-black bg-white p-6">
                    <h4 className="text-xl font-black mb-2 bg-cyan-300 inline-block px-2 border-2 border-black">ADDITION 1: ERROR PROTOCOLS</h4>
                    <p className="mt-4 font-mono text-sm">
                        <strong>The "Safe-Fail" Clause:</strong> Senior devs know things break. 
                        <br/><br/>
                        <em>Add to Prompt:</em> "Implement an ErrorBoundary component wrapping the 3D engine. If the WebGL context is lost or the engine crashes, display a friendly UI fallback rather than a white screen."
                    </p>
                </div>

                <div className="border-4 border-black bg-white p-6">
                    <h4 className="text-xl font-black mb-2 bg-purple-300 inline-block px-2 border-2 border-black">ADDITION 2: THE LOOP</h4>
                    <p className="mt-4 font-mono text-sm">
                        <strong>Iterative Refinement:</strong> The Golden Prompt gets you 80% there.
                        <br/><br/>
                        <em>Strategy:</em> Define a "Refactoring Mode" in subsequent prompts. "Review the code you just wrote. Identify potential memory leaks in the VoxelEngine class and propose a refactor before we continue."
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};