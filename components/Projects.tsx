/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import Image from "next/image";
import proj1 from "../misc/pskl2.jpg";

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

        @media screen and (max-width: 768px) {
          div {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 3.5rem;
          }

          p {
            border-top: 5px solid ${colors.fg};
            border-right: 0;
            padding-top: 1rem;
          }
        }
      `}
    >
      <h1>My works.</h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 3rem;

          img {
            border-radius: 1rem;
            transition: 0.3s;
            filter: grayscale(100%);

            &:hover {
              filter: grayscale(0);
            }
          }

          p {
            color: ${colors.fg1};
            margin: 0;
            font-size: 1.5rem;
            line-height: 2.5rem;
            border-right: 5px solid ${colors.fg};
          }
        `}
      >
        <a href='https://pskl.vercel.app' target='_blank' rel='noreferrer'>
          <Image
            src={proj1}
            alt='an image that displays about project-skl website.'
          />
        </a>
        <p>
          Created for learning purposes! A platform to freely share your
          thoughts while staying anonymous! This platform can also be used to
          vent or rant about someone or something! You can also share quotes,
          messages, basically anything that you could think of!
        </p>
      </div>
    </section>
  );
};
