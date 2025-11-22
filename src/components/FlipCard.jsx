import React, { useState } from 'react';

const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-[1000px] w-96 h-96">
      <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-6">
          {front}
          <button className="text-[var(--powder-blue)] mt-4" onClick={() => setIsFlipped(true)}>Switch to {isFlipped ? 'Login' : 'Signup'}</button>
        </div>
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-6 rotate-y-180">
          {back}
          <button className="text-[var(--powder-blue)] mt-4" onClick={() => setIsFlipped(false)}>Switch to {isFlipped ? 'Login' : 'Signup'}</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;