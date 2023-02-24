import { Inter } from 'next/font/google';
import { useState } from 'react';
import { TURNS } from '@/constant';
import Square from '@/components/Square';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-indigo-500'>
      <p className='px-4 py-2 mb-8 text-xl font-bold text-indigo-200 border-2 border-indigo-200'>
        TIC TAC TOE
      </p>
      <div className='grid grid-cols-3 gap-2 p-2'>
        {board.map((square, index) => (
          <div key={index}>
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-2 mt-4 text-2xl text-white'>
        <div className='px-4 py-2 bg-indigo-600'>{TURNS.O}</div>
        <div className='px-4 py-2 bg-indigo-600'>{TURNS.X}</div>
      </div>
      <button className='inline-flex items-center px-4 py-2 mt-8 font-bold text-indigo-800 bg-indigo-300 rounded hover:bg-indigo-400'>
        <span>Reset</span>
      </button>
      <footer className='mt-8'>
        <p className='text-sm text-indigo-100'>
          Developed by{' '}
          <a href='mailto:nammmu@gmail.com' className='underline'>
            Nammu Lovett
          </a>
        </p>
      </footer>
    </div>
  );
}
