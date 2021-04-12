import React, { useState } from "react";

import styled from "styled-components";

import { AnimateSharedLayout } from "framer-motion";

import { About } from "../styles";

import Toggle from "./Toggle";

import { useScroll } from "./useScroll";

import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I Start?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum, dolor sit amet </p>
              <p>
                Lorem ipsum, dolor sit amet censectetur adipisicing
                Necessitatibus, newue.
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet </p>
            <p>
              Lorem ipsum, dolor sit amet censectetur adipisicing
              Necessitatibus, newue.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet </p>
            <p>
              Lorem ipsum, dolor sit amet censectetur adipisicing
              Necessitatibus, newue.
            </p>
          </div>
        </Toggle>

        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet </p>
            <p>
              Lorem ipsum, dolor sit amet censectetur adipisicing
              Necessitatibus, newue.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }

  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;

export default FaqSection;
