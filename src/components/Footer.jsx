import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-screen-lg mx-auto py-10 mt-20">
      <div className="w-full flex gap-10">
        <div className="basis-1/2">
          <h1 className="text-9xl font-semibold tracking-tight leading-none">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex justify-end gap-10">
          <div className="one">
            <h4 className="mb-6">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((link, index) => (
              <a key={index} href="#" className="block my-2 text-sm text-zinc-500">
                {link}
              </a>
            ))}
          </div>
          <div className="two">
            <h4 className="mb-6">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((link, index) => (
              <a key={index} href="#" className="block my-2 text-sm text-zinc-500">
                {link}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex items-end justify-between flex-col">
            <p className="text-sm text-end">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              corrupti dignissimos ad minima neque veritatis.
            </p>
            <button className="bg-blue-700 px-4 py-2 rounded-sm text-sm">
              Enterprise Program
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (elem, index) => (
            <a key={index} href="#" className="block my-2 text-sm text-zinc-500">{elem}</a>
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;
