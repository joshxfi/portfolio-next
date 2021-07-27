/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";

export const About: React.FC = ({}) => {
  return (
    <section
      id='about'
      css={css`
        width: 80%;
        margin: 0 auto;
        height: 100vh;
        display: grid;
        place-content: center;

        p {
          font-size: 16px;
        }

        @media screen and (max-width: 768px) {
          height: 110vh;

          p {
            font-size: 15px;
          }

          div {
            grid-template-columns: 1fr;
            width: 100%;
          }
        }
      `}
    >
      <div
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
          enthusiast based in the Philippines. I'm a 17 year-old self-taught
          full-stack MERN developer. I constantly procrastinate & in
          discombobulation.
        </p>
      </div>
    </section>
  );
};
