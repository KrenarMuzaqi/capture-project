import React from "react";
import home1 from "../img/home1.png";

//import Framer Motion
import { motion } from "framer-motion";
import { titleAnim } from "../animation";
import { fade } from "../animation";
import { photoAnim } from "../animation";

//Styled
import styled from "styled-components";

//Import Styles
import { About, Hide, Image, Description } from "../styles";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      {/*IF we want to show images first (out of staggerChildren) we can add ~ initial="hidden" animate="show" (then doesn't wait for staggering)*/}
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
