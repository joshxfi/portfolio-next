/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGmail } from "react-icons/si";

export const Footer: React.FC = () => {
  return (
    <>
      <footer
        css={css`
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${colors.fg1};
          background: #000;

          div {
            padding-right: 10rem;
          }

          p {
            padding-left: 10rem;
          }

          @media screen and (max-width: 1080px) {
            justify-content: center;
            flex-direction: column;

            div {
              padding-right: 0;
            }

            p {
              padding-left: 0;
            }
          }
        `}
      >
        <p>© Josh Daniel Bañares 2021 • All Rights Reserved</p>
        <div
          css={css`
            font-size: 20px;

            a:not(:last-child) {
              margin-right: 40px;
            }

            a:hover {
              transition: 0.3s;
              color: ${colors.fg2};
            }
          `}
        >
          <a target='_blank' href='https://github.com/joshxfi' rel='noreferrer'>
            <SiGithub />
          </a>

          <a href='#'>
            <SiDiscord />
          </a>

          <a target='_blank' href='https://www.instagram.com/josh.xfi/' rel='noreferrer'>
            <SiInstagram />
          </a>

          <a href='mailto:joshxfi.dev@gmail.com' rel='noreferrer'>
            <SiGmail />
          </a>
        </div>
      </footer>
    </>
  );
};
