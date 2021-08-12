/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Project } from "./Project";
import colors from "../misc/colors";
import mq from "../misc/mediaQuery";
import pskl from "../public/img/pskl2.jpg";
import cssmaid from "../public/img/cssmaid.jpg";
import covidtracker from "../public/img/covidtracker.jpg";
import ghstats from "../public/img/ghstats.jpg";

export const Projects: React.FC = () => {
  return (
    <section
      id='works'
      css={css`
        width: 80%;
        max-width: 1280px;
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

        ${mq} {
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
        img={ghstats}
        url='https://gh-stats-gen.vercel.app'
        title='GitHub Stats Generator'
        desc="Generate your GitHub stats for your README! Easy to use with alot of themes to choose from! Make your GitHub's special repository look special!"
      />

      <Project
        img={cssmaid}
        url='https://css-maid.vercel.app'
        title='CSS Maid'
        desc='CSS Maid is a tool for React.js that helps clean up & reset default css! It resets default padding, remove text-decoration on <a> tag, and many more! This tool was built using emotion & typescript!'
      />

      <Project
        img={covidtracker}
        url='https://covidph.vercel.app'
        title='Covid-19 Tracker PH'
        desc='See how our country is doing against Covid-19! This website will give you straightforward statistics! Data is updated every 10 minutes from Worldometers.info. Data includes: cases, deaths, recoveries, tests, etc!'
      />

      <Project
        img={pskl}
        url='https://pskl.vercel.app'
        title='Project Share Ko Lang'
        desc='A platform to freely share your thoughts while
            staying anonymous! This platform can also be used to vent or rant about someone or something! You can also share
            quotes, messages, basically anything that you could think of!'
      />
    </section>
  );
};
