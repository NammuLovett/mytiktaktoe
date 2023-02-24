const Square = ({ children, index }) => {
  const handleClick = () => {
    console.log(index);
  };
  return (
    <div
      onClick={handleClick}
      className='w-16 h-16 border-2 bg-indigo-600 flex justify-center items-center text-indigo-200 text-xl cursor-pointer font-bold'
    >
      {children}
    </div>
  );
};

export default Square;
