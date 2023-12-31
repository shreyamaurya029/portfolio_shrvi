import React, { useRef } from 'react';
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "900%"]);

  return (
    <div
      className='Parallax'
      ref={ref}
      style={{
        background: type === "coding"
          ? "linear-gradient(180deg,#024a6d, #C5C6C7)"
          : "linear-gradient(180deg,#C5C6C7, #024a6d)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "coding" ? "My Coding Profile" : "Projects I built"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{y : yBg,
        backgroundImage: `url(${type==="coding" ? "" : "/sun.png"})`
      }}></motion.div>
      <motion.div style={{x : yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
