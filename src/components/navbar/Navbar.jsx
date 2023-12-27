import React from 'react'
import "./Navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import {motion} from "framer-motion"

const Navbar = () => {
    return(
        <div className='Navbar'>
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1 }}  
                transition={{duration:0.5}}>
                    Shreya Maurya
                </motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100076179082075"><img src="/facebook.png" alt="" /></a>
                    <a href="https://www.instagram.com/shrvi0239/"><img src="/instagram.png" alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCNVfdpoF37dicWrygyjfi3g"><img src="/youtube.png" alt="" /></a>
                    <a href="twitter.com/ShrVi_0239"><img src="/twitter.png" alt="" /></a>
                    <a href="https://pin.it/7wPt3Eb"><img src="/pinterest.png" alt="" /></a>
                    <a href="https://github.com/shreyamaurya029"><img src="/github.png" alt="" /></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar