import React from "react";
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Contact Us on Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background-color: #fff;

  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;

  @media (max-width: 1300px) {
    width: 1rem;
    height: 1rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }

  @media (max-width: 1300px) {
    h2 {
      font-size: 2rem;
      font-weight: normal;
      margin-right: 0;
    }
  }
`;

export default ContactUs;
