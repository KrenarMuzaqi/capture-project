import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//Animations
import { motion } from "framer-motion";
import { pageAnimation, photoAnim, fade } from "../animation";

const OurWrok = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <div className="line"> </div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className="line"> </motion.div>
        <Link to="/work/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="theracer" />
          </Hide>
        </Link>
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <div className="line"> </div>
        <Link to="/work/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: #fff;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OurWrok;
