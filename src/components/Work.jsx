import { useScroll } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    const showImage = (arr) =>
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );

    switch (Math.floor(data * 100)) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 3:
        showImage([0,1]);
        break;
      case 5:
        showImage([0,1,2]);
        break;
      case 7:
        showImage([0,1,2,3]);
        break;
      case 9:
        showImage([0,1,2,3,4]);
        break;
      case 11:
        showImage([0,1,2,3,4,5]);
        break;
      case 13:
        showImage([0,1,2,3,4,5,6]);
        break;
    }
  });

  return (
    <section className="w-full mt-[2.5vw]">
      <div className="text max-w-screen-lg mx-auto relative">
        <h1 className="text-center font-semibold text-[30vw] select-none leading-none tracking-tight text-zinc-100">
          Work
        </h1>
        <div className="imgs w-full h-full absolute top-0">
          {images.map(
            (item, index) =>
              item.isActive && (
                <img
                  key={index}
                  src={item.url}
                  className="absolute w-[10vw] h-[10vw] object-cover -translate-x-1/2 -translate-y-1/2 rounded-md"
                  style={{ top: item.top, left: item.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
