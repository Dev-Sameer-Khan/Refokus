import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  let images = [
    [
      "https://www.svgrepo.com/show/303264/amazon-2-logo.svg",
      "https://www.svgrepo.com/show/303665/apple-11-logo.svg",
      "https://www.svgrepo.com/show/108730/awwards.svg",
      "https://www.svgrepo.com/show/372975/yahoo.svg",
      "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
      "https://www.svgrepo.com/show/354543/webflow.svg",
      "https://www.svgrepo.com/show/303685/facebook-5-logo.svg",
      "https://www.svgrepo.com/show/303271/youtube-2-logo.svg",
      "https://www.svgrepo.com/show/303264/amazon-2-logo.svg",
      "https://www.svgrepo.com/show/303665/apple-11-logo.svg",
      "https://www.svgrepo.com/show/108730/awwards.svg",
      "https://www.svgrepo.com/show/372975/yahoo.svg",
      "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
      "https://www.svgrepo.com/show/354543/webflow.svg",
      "https://www.svgrepo.com/show/303685/facebook-5-logo.svg",
      "https://www.svgrepo.com/show/303271/youtube-2-logo.svg",
    ],
    [
      "https://www.svgrepo.com/show/303264/amazon-2-logo.svg",
      "https://www.svgrepo.com/show/303665/apple-11-logo.svg",
      "https://www.svgrepo.com/show/108730/awwards.svg",
      "https://www.svgrepo.com/show/372975/yahoo.svg",
      "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
      "https://www.svgrepo.com/show/354543/webflow.svg",
      "https://www.svgrepo.com/show/303685/facebook-5-logo.svg",
      "https://www.svgrepo.com/show/303271/youtube-2-logo.svg",
      "https://www.svgrepo.com/show/303264/amazon-2-logo.svg",
      "https://www.svgrepo.com/show/303665/apple-11-logo.svg",
      "https://www.svgrepo.com/show/108730/awwards.svg",
      "https://www.svgrepo.com/show/372975/yahoo.svg",
      "https://www.svgrepo.com/show/303141/spotify-1-logo.svg",
      "https://www.svgrepo.com/show/354543/webflow.svg",
      "https://www.svgrepo.com/show/303685/facebook-5-logo.svg",
      "https://www.svgrepo.com/show/303271/youtube-2-logo.svg"
    ],
  ];

  return (
    <div className="py-20">
      {images.map((image, index) => (
        <Marquee key={index} images={image} direction={index === 0 ? "left" : "right"}/>
      ))}
    </div>
  );
};

export default Marquees;
