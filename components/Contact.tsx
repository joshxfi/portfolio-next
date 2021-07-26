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
        height: 100vh;
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1 {
          font-size: 50px;
        }
        a {
          border: 2px solid ${colors.fg2};
          padding: 10px;
          border-radius: 8px;
          width: 200px;
          text-align: center;
          transition: 0.3s;
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
      `}>
      <h1>send me a message!</h1>
      <a href='mailto:joshpersonal8@gmail.com'>hit me up!</a>
    </section>
  );
};
