"use client";


import React from 'react';
import { useRouter } from 'next/navigation'

const Quiz: React.FC = () => {
  const router = useRouter();

  const handleSelection = (choice: string) => {
    router.push(`/ad?choice=${choice}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bg">
      <h1 className="text-2xl font-bold mb-8 text-black">What do you like?</h1>
      <button
        className="btn btn-black text-white w-64 mb-4"
        onClick={() => handleSelection('football')}
      >
        Football
      </button>
      <button
        className="btn btn-black text-white w-64 mb-4"
        onClick={() => handleSelection('basketball')}
      >
        Basketball
      </button>
      <button
        className="btn btn-black text-white w-64 mb-4"
        onClick={() => handleSelection('movies')}
      >
        Movies
      </button>
    </div>
  );
};

export default Quiz;
