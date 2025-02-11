import React from "react";
import { IoIosArrowRoundForward, IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, para, start, hover = "none" }) => {
  // The hover classes need to be applied directly, not dynamically
  // Using template literals with hover:${hover} won't work with Tailwind's JIT compiler
  return (
    <motion.div
      whileHover={{backgroundColor : hover === true && "#8b5cf6"}}
      className={`p-4 bg-zinc-800 rounded-lg ${width} hover:p-5 transition-all min-h-[30rem] flex justify-between flex-col`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>Up Next Culture</h3>
          <IoIosArrowRoundForward />
        </div>
        <h4 className="my-2 text-3xl font-medium">Whatever Heading</h4>
      </div>
      <div className="dynamic">
        {start === true && (
          <>
            <h2 className="text-5xl font-bold">Start Journey</h2>
            <button className="rounded-full border-[1px] border-zinc-300 px-4 py-2 mt-2">
              Get Started
            </button>
          </>
        )}
        {para === true && (
          <p className="text-sm text-zinc-500 tracking-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
