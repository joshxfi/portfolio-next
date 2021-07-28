/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import Image from "next/image";
import hand from "../public/img/hand.png";

export const Contact: React.FC = () => {
  return (
    <section
      id='contact'
      css={css`
        height: 120vh;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        overflow: hidden;
        position: relative;

        h1 {
          font-size: 5rem;
          margin: 0;
        }

        a {
          border: 2px solid ${colors.fg2};
          padding: 10px;
          border-radius: 8px;
          width: 40%;
          text-align: center;
          margin-top: 2rem;

          &:hover {
            background: ${colors.fg2};
          }
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }

          a {
            width: 100%;
            font-size: 1.3rem;
          }
        }
      `}
    >
      <h1 data-aos='zoom-out-up'>Hit me up!</h1>
      <a data-aos='zoom-out-up' href='mailto:joshxfi.dev@gmail.com'>
        send message
      </a>

      <div
        data-aos='fade-up'
        data-aos-delay='400'
        data-aos-offset='200'
        css={css`
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 35rem;
          z-index: 11;

          img {
            height: 30rem;
          }
        `}
      >
        <Image src={hand} alt='an image showing a hand pointing up' />
      </div>
    </section>
  );
};
