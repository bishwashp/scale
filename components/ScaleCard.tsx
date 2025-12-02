import React, { useState } from 'react';
import { ScalePrinciple } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  principle: ScalePrinciple;
}

export const ScaleCard: React.FC<Props> = ({ principle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-4 border-black neo-shadow mb-8 overflow-hidden bg-white`}>
      <div 
        className={`p-6 flex justify-between items-center cursor-pointer ${principle.color} border-b-4 border-black`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-6">
          <span className="text-6xl font-black stroke-text font-mono">{principle.letter}</span>
          <div>
            <h3 className="text-2xl font-bold uppercase">{principle.title}</h3>
            <p className="font-mono text-sm opacity-80">Click to expand</p>
          </div>
        </div>
        <div className="bg-black text-white p-2 rounded-none">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>
      
      {isOpen && (
        <div className="p-6 bg-white">
          <p className="text-lg mb-6 font-medium leading-relaxed">
            {principle.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-100 border-2 border-red-500 p-4">
              <span className="bg-red-500 text-white px-2 py-1 font-bold text-xs border border-black mb-2 inline-block">DON'T SAY</span>
              <p className="font-mono text-sm mt-2">{principle.dont}</p>
            </div>
            <div className="bg-green-100 border-2 border-green-500 p-4">
              <span className="bg-green-500 text-white px-2 py-1 font-bold text-xs border border-black mb-2 inline-block">DO SAY</span>
              <p className="font-mono text-sm mt-2">{principle.do}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};