import React, { useState } from 'react';
import { ScalePrinciple, Section } from './types';
import { ScaleCard } from './components/ScaleCard';
import { NeoButton } from './components/NeoButton';
import { Workshop } from './components/Workshop';
import { Box, ArrowDown, Star, Zap, Copy, Check, ShieldAlert, RefreshCw } from 'lucide-react';

const PRINCIPLES: ScalePrinciple[] = [
  {
    letter: 'S',
    title: 'Specific Tools',
    description: 'Don\'t let the AI guess. Tell it exactly which tools, libraries, and versions to use.',
    do: 'Use React 18, Tailwind CSS and Neobrutalism Components (for React/Tailwind) or NeoBrutalismCSS (CSS-only).',
    dont: 'Use frontend libraries and frameworks.',
    color: 'bg-[#A3E635]' // Lime
  },
  {
    letter: 'C',
    title: 'Clear Limits',
    description: 'Set boundaries to prevent bugs. Tell the AI what it is NOT allowed to do.',
    do: 'Do not use external CSS files. Max 100 items in the list.',
    dont: 'Make it fast and handle a lot of data.',
    color: 'bg-[#60A5FA]' // Blue
  },
  {
    letter: 'A',
    title: 'Aesthetic Vibe',
    description: 'Describe the look and feel using specific design styles rather than generic terms.',
    do: 'Thick black borders, bright neon colors, sharp corners.',
    dont: 'Make it look nice and modern.',
    color: 'bg-[#F472B6]' // Pink
  },
  {
    letter: 'L',
    title: 'Logical Flow',
    description: 'Explain how the app works step-by-step, like a recipe, rather than just describing the result.',
    do: 'When the user clicks "Start", set status to "Running" and start the timer.',
    dont: 'Make a timer that works when I click start.',
    color: 'bg-[#FBBF24]' // Amber
  },
  {
    letter: 'E',
    title: 'Example Code',
    description: 'Show the AI your coding style. Paste a small snippet so it copies your pattern.',
    do: 'Write components like this: [paste 5 lines of your code].',
    dont: 'Write clean and maintainable code.',
    color: 'bg-[#C084FC]' // Purple
  }
];

export default function App() {
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyGoldenPrompt = () => {
    const promptText = `Role: Senior Frontend Developer.
Task: Build a "Reminder" app.

[S] PECIFICS:
- React 18 (Functional), Tailwind CSS.

[C] LARITY:
- No complex physics engines.
- State must be a simple array of objects.
- If WebGL crashes, show a generic error message (Safe-Fail).

[A] ESTHETIC:
- Style: "Neobrutalist". High contrast, thick borders.
- Colors: Lime green, Black, White.

[L] OGIC:
1. User clicks Add -> Add reminder.
2. User clicks Delete -> Add reminder.
3. Review Step: After generating code, check for memory leaks.

[E] XAMPLE:
Take references from Apple Reminder App`;

    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#E0E0E0] text-black pb-24 font-sans selection:bg-black selection:text-[#A3E635]">
      {/* Header / Nav */}
      <nav className="sticky top-0 z-50 bg-black text-white border-b-4 border-black p-4 flex justify-between items-center shadow-xl">
        <div className="font-black text-xl md:text-2xl tracking-tighter flex items-center gap-2 select-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Box className="text-[#A3E635]" />
          S.C.A.L.E. <span className="hidden md:inline text-[#A3E635]">FRAMEWORK</span>
        </div>
        <div className="hidden md:flex gap-4">
          <button onClick={() => scrollToSection('scale')} className="hover:text-[#A3E635] font-mono font-bold uppercase transition-colors">Principles</button>
          <button onClick={() => scrollToSection('workshop')} className="hover:text-[#A3E635] font-mono font-bold uppercase transition-colors">Workshop</button>
          <button onClick={() => scrollToSection('golden')} className="hover:text-[#A3E635] font-mono font-bold uppercase transition-colors">The Template</button>
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-8 pt-12 max-w-6xl">

        {/* HERO SECTION */}
        <header className="mb-24">
          <div className="bg-white border-4 border-black p-8 md:p-16 neo-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 md:w-48 md:h-48 bg-[#A3E635] border-l-4 border-b-4 border-black rounded-bl-full z-0"></div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 relative z-10 leading-[0.9] tracking-tighter">
              BETTER PROMPTS<br />
              BETTER<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">SOFTWARE</span>
            </h1>
            <p className="text-xl md:text-2xl font-mono max-w-2xl relative z-10 mb-8 border-l-8 border-black pl-6 py-2 bg-yellow-50">
              A simple framework to stop guessing and start building. Treat the AI like a junior dev: be specific, be clear, set boundaries.
            </p>

            <div className="flex flex-col md:flex-row gap-4 relative z-10">
              <NeoButton onClick={() => scrollToSection('workshop')} className="flex items-center gap-2">
                <Zap size={20} fill="black" />
                Fix My Prompt
              </NeoButton>
              <NeoButton variant="secondary" onClick={() => scrollToSection('scale')} className="flex items-center gap-2">
                <ArrowDown size={20} />
                Read Principles
              </NeoButton>
            </div>
          </div>
        </header>

        {/* S.C.A.L.E. FRAMEWORK SECTION */}
        <section id="scale" className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">01</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The 5 Principles</h2>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {PRINCIPLES.map((p) => (
              <ScaleCard key={p.letter} principle={p} />
            ))}
          </div>
        </section>

        {/* WORKSHOP SECTION */}
        <section id="workshop" className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">02</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Workshop</h2>
          </div>
          <p className="text-xl font-mono mb-8">
            Enter a basic idea, and our AI architect will rewrite it using the S.C.A.L.E. framework with added safety protocols.
          </p>

          <Workshop />
        </section>

        {/* GOLDEN PROMPT SECTION */}
        <section id="golden" className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">03</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Template</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Context Side */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#C084FC] p-6 border-4 border-black neo-shadow">
                <Star className="w-12 h-12 mb-4" fill="white" />
                <h3 className="text-2xl font-bold mb-2">THE BLUEPRINT</h3>
                <p className="font-mono text-sm">
                  This template includes all 5 principles plus "Safety" and "Review" loops to catch errors early.
                </p>
              </div>

              {/* New Feedback Implementation callouts */}
              <div className="bg-yellow-100 p-6 border-4 border-black neo-shadow-sm">
                <h4 className="font-bold uppercase border-b-2 border-black pb-2 mb-2 flex items-center gap-2">
                  <ShieldAlert size={16} /> Safe-Fail Included
                </h4>
                <p className="font-mono text-sm mb-4">
                  We explicitly tell the AI what to do if things break (e.g. WebGL crash).
                </p>

                <h4 className="font-bold uppercase border-b-2 border-black pb-2 mb-2 flex items-center gap-2">
                  <RefreshCw size={16} /> Review Loop Included
                </h4>
                <p className="font-mono text-sm">
                  We ask the AI to review its own code for memory leaks before finishing.
                </p>
              </div>
            </div>

            {/* Code Side */}
            <div className="lg:col-span-8">
              <div className="bg-slate-900 text-slate-50 p-2 border-4 border-black neo-shadow relative group">
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={copyGoldenPrompt}
                    className="bg-[#A3E635] text-black px-4 py-2 font-bold text-xs uppercase border-2 border-black flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 transition-transform"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy Template'}
                  </button>
                </div>
                <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
                  <pre className="whitespace-pre-wrap">
                    <span className="text-gray-400"># 1. Role & Task</span>
                    <span className="text-pink-400 font-bold">Role:</span> Senior Frontend Developer.
                    <span className="text-pink-400 font-bold">Task:</span> Build a "Reminder" app.

                    <span className="text-gray-400"># 2. The S.C.A.L.E. Specs</span>
                    <span className="text-[#A3E635] font-bold">[S] PECIFICS:</span>
                    - React 18 (Functional), Tailwind CSS, Three.js.

                    <span className="text-blue-400 font-bold">[C] LARITY:</span>
                    - No complex physics engines.
                    - State must be a simple array of objects.
                    - <span className="text-red-300 bg-red-900 px-1">SAFE-FAIL:</span> If WebGL crashes, show a generic error message.

                    <span className="text-pink-400 font-bold">[A] ESTHETIC:</span>
                    - Style: "Neobrutalist". High contrast, thick borders.
                    - Colors: Lime green, Black, White.

                    <span className="text-yellow-400 font-bold">[L] OGIC:</span>
                    1. User clicks Add -&gt; Add reminder.
                    2. User clicks Delete -&gt; Add reminder.
                    3. <span className="text-purple-300 bg-purple-900 px-1">REVIEW LOOP:</span> After generating code, check for memory leaks.

                    <span className="text-purple-400 font-bold">[E] XAMPLE:</span>
                    Take references from Apple Reminder App
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-12 mt-24 border-t-4 border-[#A3E635]">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black text-[#A3E635]">S.C.A.L.E.</h3>
            <p className="font-mono text-sm text-gray-400">Est. 2025 To Infinity // Neobrutalist Edition</p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-bold uppercase">Built with React + Tailwind + Gemini</p>
            <p className="text-xs text-gray-500 mt-2">Simplified for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}