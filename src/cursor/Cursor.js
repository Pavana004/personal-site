import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../cursor/cursor.css'

const Cursor = () => {

    const [position, setposition] = useState({
        x: 0,
        y: 0,
    });


    useEffect(() => {

        const mouseTrack = (e) => {
            setposition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", mouseTrack);


        return () => {
            window.removeEventListener("mousemove", mouseTrack)
        }
    }, []);

    console.log(position)


    return (
        <motion.div
            animate={{ x: position.x + 10, y: position.y + 10 }}
            className='cursor'></motion.div>
    )
}

export default Cursor