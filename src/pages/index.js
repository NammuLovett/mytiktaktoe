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
    <div className='h-screen bg-indigo-500 flex flex-col justify-center items-center'>
      <p className='text-xl font-bold text-indigo-200 mb-8 border-2 border-indigo-200 py-2 px-4'>
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
      <div className='flex items-center justify-center mt-4 gap-2 text-2xl text-white'>
        <div className='bg-indigo-600 px-4 py-2'>{TURNS.O}</div>
        <div className='bg-indigo-600 px-4 py-2'>{TURNS.X}</div>
      </div>
      <button className='bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded inline-flex items-center mt-8'>
        <span>Reset</span>
      </button>
      <footer className='mt-8'>
        <p className='text-indigo-100 text-sm'>
          Developed by{' '}
          <a href='mailto:nammmu@gmail.com' className='underline'>
            Nammu Lovett
          </a>
        </p>
      </footer>
    </div>
  );
}
