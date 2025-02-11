import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="max-w-screen-lg mx-auto text-white py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="left flex items-center">
        <img
          src="https://cdn.prod.website-files.com/64fecceda7b376ccd0b96a90/64fecceda7b376ccd0b96b2d_favicon.png"
          alt=""
        />
        <div className="links flex gap-8 ml-8 font-regular">
          {["Home", "Work", "Culture", "", "News"].map((item, index) =>
            item.length === 0 ? (
              <span
                key={`separator-${index}`}
                className="inline-block w-[2px] h-6 bg-zinc-700"
              ></span>
            ) : (
              <a
                key={item}
                href="#"
                className="text-sm px-4 flex items-center gap-1"
              >
                {index === 1 && (
                  <span
                    className="inline-block w-1 h-1 rounded-full bg-green-400 cursor-pointer"
                    style={{ boxShadow: "0 0 0 0.1rem #00ff19" }}
                  ></span>
                )}
                {item}
              </a>
            )
          )}
        </div>
      </div>
      <Button title="Get Started"/>
    </nav>
  );
};

export default Navbar;
