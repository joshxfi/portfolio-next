/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";

interface TechnologiesProps {}

export const Technologies: React.FC<TechnologiesProps> = ({}) => {
  return (
    <section
      css={css`
        width: 80%;
        margin: 0 auto;
        min-height: 100vh;
        height: auto;
        display: flex;
        flex-direction: column;

        h1 {
          font-size: 5rem;
          width: 100%;
        }

        p {
          font-size: 1.5rem;
          color: ${colors.fg1};
        }

        @media screen and (max-width: 768px) {
          justify-content: center;

          div {
            width: 100%;
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
          width: 70%;
          line-height: 2.5rem;
          font-weight: 500;
        `}
      >
        <h1>my techs.</h1>
        <p>
          For front-end I use React.js with TypeScript. I use Vite.js for my React projects (<i>CRA's too 🐢</i>), but I
          use Next.js for SSG & SSR. For styling, I use either Emotion or TailwindCSS. For back-end I use Express.js
          with TypeScript, RestAPI (<i>GraphQL soon</i>), & MongoDB as my database.
        </p>
      </div>
    </section>
  );
};
