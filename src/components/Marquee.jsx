import React from 'react'
import {motion} from 'framer-motion'

const Marquee = ({images ,direction}) => {
  return (
   <div className='flex w-full overflow-hidden relative'>
    <div className="absolute h-full w-full inset-0 bg-[linear-gradient(90deg,#0F0F11_0%,rgba(10,10,10,0)_10%,rgba(0,0,0,0)_50%,rgba(6,6,6,0)_90%,#0F0F11_100%)] z-10"></div>
        <motion.div 
          className='flex shrink-0 gap-20 pr-20'
          initial={{x: direction === 'left' ? "0" : "-100%"}} 
          animate={{x: direction === 'left' ? "-100%" : "0"}} 
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {images.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt="logo" 
              className="w-32 aspect-square contrast-0 invert"
            />
          ))}
        </motion.div>
        <motion.div 
          className='flex shrink-0 gap-20 pr-20'
          initial={{x: direction === 'right' ? "-100%" : "0"}} 
          animate={{x: direction === 'right' ? "0" : "-100%"}}
          transition={{
            ease: "linear", 
            duration: 20,
            repeat: Infinity,
          }}
        >
          {images.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt="logo" 
              className="w-32 aspect-square contrast-0 invert"
            />
          ))}
        </motion.div>
   </div>
  )
}

export default Marquee