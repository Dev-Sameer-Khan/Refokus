import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {

    let data = [
        {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Awwards-logotype-2018.svg/1280px-Awwards-logotype-2018.svg.png", num: 11},
        {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png", num: 48},
        {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Twitter_2010_logo.svg/1280px-Twitter_2010_logo.svg.png", num: 2},
        {url: "https://pngimg.com/uploads/amazon/amazon_PNG9.png", num: 11},
        {url: "https://www.freeiconspng.com/uploads/gucci-germany-brands-logo-png-3.png", num: 48},
        {url: "https://freelogopng.com/images/all_img/1656994565linkedin-png.png", num: 2},
    ]

  return (
    <div className='w-full flex items-center my-18'>
        {data.map((val, index) => (
        <Stripe key={index} val={val} />
    ))}
    </div>
  )
}

export default Stripes