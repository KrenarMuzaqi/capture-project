import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import { MovieState } from "../movieState";

const MovieDetail = () => {
  const history = useHistory();

  const url = history.location.pathname;

  const [movies, setMovies] = useState(MovieState);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);

    setMovie(currentMovie[0]);
  }, [movies, url]); //executes every times when movies or url change

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </motion.div>
  );
};

const Details = styled.div`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  justify-content: space-around;

  @media (max-width: 1300px) {
    display: block;
    margin: 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 3rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;

    @media (max-width: 500px) {
      height: auto;
    }
  }
`;

export default MovieDetail;
