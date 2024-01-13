import React, { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Rental System",
    img: "https://github.com/shreyamaurya029/rental-system/blob/main/Screenshot%202023-12-27%20at%2012.39.19%20PM.png?raw=true",
    desc: "FreeWheelRentals meets the demand for short-term vehicle rentals, particularly among college students. The platform enables users to easily reserve bicycles and motorbikes for city commuting or tours. With a user-friendly interface offering login, registration, and a contact section,it simplifies the booking process and addresses user inquiries",
  },

  {
    id: 2,
    title: "Seedling",
    img: "https://github.com/shreyamaurya029/_seedling_react/assets/100403765/b9583313-d993-4bc3-b96e-97b6e7dfdd74",
    desc: "Seedling is a web application that aims to raise awareness about the importance of planting trees and provide information about various tree species. The project also offers a platform for users to contribute to tree planting efforts by donating money to NGOs",
  },

  {
    id: 3,
    title: "Memory Game",
    img: "https://github.com/shreyamaurya029/memory-game/blob/main/ss.png?raw=true",
    desc: "This is a simple memory game built using React, where players test their memory by flipping cards and trying to find matching pairs",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 50]);

  return (
    <section className="section">
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
