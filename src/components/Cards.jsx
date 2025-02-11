import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='flex gap-2 max-w-screen-lg mx-auto'>
    <Card width={"basis-[35%]"} para={true} start={false}/>
    <Card width={"basis-[65%]"} para={false} start={true} hover={true}/>
    </div>
  )
}

export default Cards