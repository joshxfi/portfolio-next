/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";

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
          transition: 0.3s;
          margin-top: 2rem;

          &:hover {
            background: ${colors.fg2};
            transform: translateY(-5px);
          }
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 25px;
          }

          a {
            width: 150px;
            font-size: 15px;
          }
        }
      `}
    >
      <h1>Send me a message!</h1>
      <a href='mailto:joshxfi.dev@gmail.com'>hit me up!</a>
    </section>
  );
};
