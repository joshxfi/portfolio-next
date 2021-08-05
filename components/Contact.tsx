/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
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
          padding: 10px;
          text-align: center;
          font-size: 5rem;

          &:hover {
            color: #ccc;
          }
        }

        @media screen and (max-width: 768px) {
          overflow: visible;

          h1 {
            font-size: 3rem;
          }

          a {
            width: 100%;
            font-size: 2rem;
          }

          div {
            z-index: -1;
            height: 20rem;
            top: auto;
            bottom: 0;
          }
        }
      `}
    >
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
            width: 20rem;
            object-fit: cover;
          }
        `}
      >
        <Image src={hand} alt='an image showing a hand pointing up' />
      </div>
      <h1 data-aos='zoom-out-up'>hit me up!</h1>
      <a data-aos='zoom-out-up' href='mailto:joshxfi.dev@gmail.com'>
        <i>joshxfi.dev@gmail.com</i>
      </a>
    </section>
  );
};
