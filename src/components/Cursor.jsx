import gsap from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Cursor = () => {

    let crsr = useRef()

    useEffect(() => {
        const handleMouseMove = (e) => {
            let x = e.clientX;
            let y = e.clientY;

            gsap.to(crsr.current, {
                x: x,
                y: y,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={crsr} className='w-3 h-3 bg-zinc-100 fixed z-[999] rounded-full'></div>
    )
}

export default Cursor