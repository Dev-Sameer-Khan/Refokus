import React from "react";
import Button from "./Button";

const Product = ({ val, index , mover }) => {
  return (
   <div className="w-full py-10 h-[15rem] hover:bg-zinc-800 transition-all">
     <div onMouseEnter={()=> mover(index)} className="max-w-screen-lg mx-auto flex items-center justify-between">
      <div className="left text-6xl font-medium">{val.title}</div>
      <div className="right w-1/3">
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam
          architecto necessitatibus totam incidunt placeat nihil vero.
        </p>
       <div className="flex items-center gap-5"> 
       {val.live && <Button title="Live demo" />}
       {val.case && <Button title="Case study" />}
       </div>
      </div>
    </div>
   </div>
  );
};

export default Product;
