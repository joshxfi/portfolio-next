/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import colors from "../misc/colors";
import avatar from "../public/img/bighead1.svg";

export const About: React.FC = ({}) => {
  return (
    <section
      id='about'
      css={css`
        width: 80%;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          justify-content: center;

          div {
            width: 100%;
          }

          div:last-of-type {
            width: 15rem;
            padding-bottom: 0;
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
        <h1>Who am I?</h1>
        <p>
          Hey there! My name is Josh Daniel Bañares, a React.js developer &
          enthusiast based in the Philippines. I&apos;m a 17 year-old
          self-taught full-stack MERN developer (<i>kinda</i>). I&apos;m
          constantly in discombobulation.
        </p>
      </div>
      <div
        data-aos='fade-left'
        css={css`
          width: 25rem;
          padding-bottom: 3rem;
        `}
      >
        <Image src={avatar} alt='an image that shows an avatar' />
      </div>
    </section>
  );
};
