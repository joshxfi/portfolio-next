/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextDotJs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSass } from "react-icons/si";

export const Technologies: React.FC = () => {
  const techIcons = [SiReact, SiNextDotJs, SiTailwindcss, SiNodeDotJs, SiMongodb, SiGit, SiTypescript, SiSass];
  const techNames: string[] = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Git",
    "TypeScript",
    "Sass",
  ];
  return (
    <section
      id='techs'
      css={css`
        width: 80%;
        margin: 0 auto;
        min-height: 110vh;
        height: auto;
        display: flex;
        align-items: center;

        h1 {
          font-size: 5rem;
          width: 100%;
        }

        p {
          font-size: 1.5rem;
          color: ${colors.fg1};
        }

        @media screen and (max-width: 1080px) {
          div {
            width: 100%;
          }

          div > h1 {
            font-size: 3rem;
          }

          div > p {
            font-size: 1.3rem;
          }

          div > div {
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }
        }
      `}
    >
      <div
        data-aos='fade-right'
        css={css`
          text-align: left;
          line-height: 2.5rem;
          font-weight: 500;
        `}
      >
        <h1>my techs.</h1>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 3rem;

            & > div {
              font-size: 3rem;
              color: ${colors.fg2};
              display: flex;
              flex-direction: column;
              align-items: center;
              border-bottom: 2px solid ${colors.fg};
              padding: 1rem 0;
              transition: 0.3s;

              &:hover svg {
                transform: translateY(-1rem);
              }

              &:hover p {
                opacity: 0;
              }

              svg {
                transition: 0.3s;
              }

              p {
                color: ${colors.fg1};
                font-weight: 400;
                margin: 0;
                font-size: 1.2rem;
                transition: 0.3s;
              }
            }
          `}
        >
          {techIcons.map((Icon, i) => (
            <div key={Icon.toString()}>
              <p>{techNames[i]}</p>
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
