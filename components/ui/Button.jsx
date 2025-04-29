import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`w-full bg-primary py-2 px-4 rounded-lg hover:bg-primary/80 duration-300 inline-block font-medium text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
