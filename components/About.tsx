/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import colors from "../styles/colors";
import mq from "../styles/mediaQuery";
import avatar from "../public/img/profile.png";

export const About: React.FC = () => {
  return (
    <section
      id='about'
      css={css`
        width: 80%;
        max-width: 1280px;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ${mq} {
          justify-content: center;

          div {
            width: 100%;
          }

          div:last-of-type {
            display: none;
          }

          div > h1 {
            font-size: 3rem;
          }

          div > p {
            font-size: 1.3rem;
          }
        }
      `}
    >
      <div
        data-aos='fade-right'
        css={css`
          text-align: left;
          width: 50%;
          line-height: 2.5rem;
          font-weight: 500;

          h1 {
            font-size: 5rem;
          }

          p {
            font-size: 1.5rem;
            color: ${colors.fg1};
          }
        `}
      >
        <h1>who am I?</h1>
        <p>
          Hey there! My name is Josh Daniel Bañares, a React.js developer &
          enthusiast based in the Philippines. I&apos;m a self-taught full-stack
          MERN developer (<i>kinda</i>), I specialize in front-end development!
          I&apos;m constantly in discombobulation.
        </p>
      </div>
      <div
        data-aos='fade-left'
        css={css`
          width: 25rem;
          padding-top: 4rem;
          transition: 0.3s;
          object-fit: contain;
        `}
      >
        <Image src={avatar} alt='avatar' />
      </div>
    </section>
  );
};
