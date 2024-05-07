const Line = ({ text }) => {
  return (
    <span className="relative flex justify-center my-[20px]">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

      <span className="relative z-10  bg-background px-6">{text}</span>
    </span>
  );
};

export default Line;
