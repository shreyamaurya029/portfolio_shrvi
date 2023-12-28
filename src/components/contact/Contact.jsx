import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzvecbo",
        "template_lvkgmfn",
        formRef.current,
        "gZdJwhLcpW4BSFhJz"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );
  };
  return (
    <motion.div
      className="Contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's connect</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>shvi0239@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>GH1 Hostel , NIT Silchar , Assam </span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>9979792868</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button>Submit
          {error && "Error"}
          {success && "Success"}
          </button>

        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
