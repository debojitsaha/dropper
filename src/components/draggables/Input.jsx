import React from "react";

const Input = ({ title }) => {
  return (
    <input
      className="bg-cyan-300 px-3 py-1 placeholder:text-white"
      placeholder={title}
      aria-label="input"
    />
  );
};

export default Input;
