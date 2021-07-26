/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import { AboutContent } from "./AboutContent";

export const About: React.FC = ({}) => {
  return (
    <section
      id='about'
      css={css`
        margin: 0 auto;
        height: 100vh;
        display: grid;
        place-content: center;
        grid-auto-columns: 80%;
        p {
          font-size: 16px;
        }
        .fc {
          grid-column: 1/3;
        }
        & > div > h1 {
          font-size: 30px;
          grid-column: 1/3;
          padding: 0 1.5rem;
          position: absolute;
          top: -80px;
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
          .fc {
            grid-column: 1;
          }
        }
      `}>
      <AboutContent />
    </section>
  );
};
