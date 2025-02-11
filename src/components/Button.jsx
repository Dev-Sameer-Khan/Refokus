import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title}) => {
  return (
    <button className="flex items-center justify-between gap-10 px-4 py-2 bg-white rounded-full text-black cursor-pointer">
      <span className="font-medium text-sm">{title}</span>
      <IoIosReturnRight size={18} />
    </button>
  );
};

export default Button;
