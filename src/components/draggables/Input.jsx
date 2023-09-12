import React from "react";

const Input = ({ title }) => {
  return (
    <input
      className="bg-white px-4 py-2 placeholder:text-gray-400 rounded-md"
      placeholder={title}
      aria-label="input"
    />
  );
};

export default Input;
