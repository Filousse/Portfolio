import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>téléphone</h4>
              <p>06 63 36 46 90</p>
              <h4>email</h4>
              <p>brasseur.blz@gmail.com</p>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Thibault Brasseur - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
