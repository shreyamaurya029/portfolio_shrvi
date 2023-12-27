import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Rental System",
    img: "https://github.com/shreyamaurya029/rental-system/blob/main/Screenshot%202023-12-27%20at%2012.39.19%20PM.png?raw=true",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsum natus animi temporibus esse ut, praesentium commodi. Tempore, maxime vero. Vel dolor odit ea tempore possimus deserunt modi nostrum error.",
  },

  {
    id: 2,
    title: "Seedling",
    img: "https://github.com/shreyamaurya029/_seedling_react/assets/100403765/b9583313-d993-4bc3-b96e-97b6e7dfdd74",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsum natus animi temporibus esse ut, praesentium commodi. Tempore, maxime vero. Vel dolor odit ea tempore possimus deserunt modi nostrum error.",
  },

  {
    id: 3,
    title: "Memory Game",
    img: "https://github.com/shreyamaurya029/memory-game/blob/main/ss.png?raw=true",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsum natus animi temporibus esse ut, praesentium commodi. Tempore, maxime vero. Vel dolor odit ea tempore possimus deserunt modi nostrum error.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 50]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="Portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
