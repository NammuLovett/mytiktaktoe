const Square = ({ children, index, updateBoard }) => {
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      onClick={handleClick}
      className='flex items-center justify-center w-16 h-16 text-xl font-bold text-indigo-200 bg-indigo-600 border-2 cursor-pointer'
    >
      {children}
    </div>
  );
};

export default Square;
