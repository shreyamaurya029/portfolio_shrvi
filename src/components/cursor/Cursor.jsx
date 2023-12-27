import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion"
import './Cursor.scss'

const Cursor = () => {
const[position, setPosition] = useState({x:0, y:0})
useEffect(() =>{
    const mouseMove = (e) =>{
        setPosition({x:e.clientX, y:e.clientY})
    }


    window.addEventListener("mousemove", mouseMove);


    return () =>{
        window.removeEventListener("mousemove", mouseMove);
    }
},[])

console.log(position)
  return (
    <motion.div className='Cursor' animate={{x:position.x+5 , y:position.y+5}}></motion.div>
  )
}

export default Cursor