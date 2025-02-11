import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] flex items-center justify-between py-6 px-4 overflow-hidden border-y-[1.2px] border-r-[1.2px] border-zinc-600 text-zinc-100'>
 <img className='w-[50%] object-cover brightness-0 invert' src={val.url} alt={`stripe-${val.num}`} />
        <span>{val.num}</span>
    </div>
  )
}

export default Stripe