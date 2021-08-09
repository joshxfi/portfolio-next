/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import pskl from "../public/img/pskl2.jpg";
import cssmaid from "../public/img/cssmaid.jpg";
import { Project } from "./Project";

export const Projects: React.FC = () => {
  return (
    <section
      id='works'
      css={css`
        width: 80%;
        margin: 0 auto;
        min-height: 100vh;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: 5rem;
          width: 100%;
        }

        div > p > b {
          color: ${colors.fg2};
        }

        @media screen and (max-width: 1080px) {
          div {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 3rem;
          }

          div > p {
            padding-top: 1rem;
            padding-right: 0;
            font-size: 1.3rem;
          }
        }
      `}
    >
      <h1 data-aos='fade-right'>my works.</h1>
      <Project
        img={pskl}
        url='https://pskl.vercel.app'
        title='Project Share Ko Lang'
        desc='A platform to freely share your thoughts while
        staying anonymous! This platform can also be used to vent or rant about someone or something! You can also share
        quotes, messages, basically anything that you could think of!'
      />

      <Project
        img={cssmaid}
        url='https://css-maid.vercel.app'
        title='CSS Maid'
        desc='CSS Maid is a tool for React.js that helps clean up & reset default css! It resets default padding, remove text-decoration on <a> tag, and many more! This tool was built using emotion & typescript!'
      />
    </section>
  );
};
