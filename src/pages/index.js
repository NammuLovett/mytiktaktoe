import { Inter } from 'next/font/google';
import { useState } from 'react';
import Square from '@/components/Square';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className='h-screen bg-indigo-500 flex flex-col justify-center items-center'>
      <p className='text-xl font-bold text-indigo-200 mb-8 border-2 border-indigo-200 py-2 px-4'>
        TIC TAC TOE
      </p>
      <div className='grid grid-cols-3 gap-2 p-2'>
        {board.map((square, index) => (
          <div key={index}>
            <Square key={index} index={index}>
              {square}
            </Square>
          </div>
        ))}
      </div>
    </div>
  );
}
