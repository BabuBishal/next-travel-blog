import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-primary py-1 px-4 rounded-lg hover:bg-primary/80 duration-300 inline-block text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
