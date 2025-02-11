import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let products = [
    {
      title: "Quantumn",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam architecto necessitatibus totam incidunt placeat nihil vero.",
      live: true,
      case: false,
    },
    {
      title: "Vite",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam architecto necessitatibus totam incidunt placeat nihil vero.",
      live: true,
      case: false,
    },
    {
      title: "Illusions",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam architecto necessitatibus totam incidunt placeat nihil vero.",
      live: true,
      case: true,
    },
    {
      title: "Awwards",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam architecto necessitatibus totam incidunt placeat nihil vero.",
      live: true,
      case: true,
    },
    {
      title: "Pata Nahi",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam architecto necessitatibus totam incidunt placeat nihil vero.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0)

  const mover = (val)=>{
    setPos(val*15)
  }

  return (
    <div className="my-20 relative">
      {products.map((product, index) => (
        <Product key={index} val={product} index={index} mover={mover} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
        initial={{y : pos ,x : "-50%"}}
        animate={{y: pos+"rem"}} transition={{ease : [0.76,0,0.24,1] ,duration: 0.5}}
        className="window w-[23rem] h-[15rem] absolute left-[48%] overflow-hidden">
          <motion.div animate={{y: -pos+"rem"}} transition={{ease : [0.76,0,0.24,1] ,duration: 0.5}} className="w-full h-full">
            <img className="w-full h-full object-cover rounded-md" src="https://images.unsplash.com/photo-1734784548166-a1ffe07dd7cd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos+"rem"}} transition={{ease : [0.76,0,0.24,1] ,duration: 0.5}} className="w-full h-full">
            <img className="w-full h-full object-cover rounded-md" src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos+"rem"}} transition={{ease : [0.76,0,0.24,1] ,duration: 0.5}} className="w-full h-full">
            <img className="w-full h-full object-cover rounded-md" src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos+"rem"}} transition={{ease : [0.76,0,0.24,1] ,duration: 0.5}} className="w-full h-full">
            <img className="w-full h-full object-cover rounded-md" src="https://plus.unsplash.com/premium_photo-1693644582023-1d5d04ed6d56?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos+"rem"}} transition={{ease : [0.76,0,0.24,1]  ,duration: 0.5}} className="w-full h-full">
            <img className="w-full h-full object-cover rounded-md" src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
