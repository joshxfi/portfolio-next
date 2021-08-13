/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import mq from "../misc/mediaQuery";
import Image from "next/image";
import donut from "../public/img/donut.png";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextDotJs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiSass } from "react-icons/si";

export const Technologies: React.FC = () => {
  const frontendIcons = [SiReact, SiNextDotJs, SiTailwindcss, SiSass];
  const frontendNames: string[] = ["React.js", "Next.js", "Tailwind CSS", "Sass"];

  const backendIcons = [SiNodeDotJs, SiMongodb, SiGit, SiTypescript];
  const backendNames: string[] = ["Node.js", "MongoDB", "Git", "TypeScript"];

  return (
    <section
      id='skills'
      css={css`
        width: 80%;
        max-width: 1280px;
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

        ${mq} {
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
            gap: 0 1rem;

            p {
              font-size: 1rem;
            }
          }
        }
      `}
    >
      <div
        css={css`
          text-align: left;
          line-height: 2.5rem;
          font-weight: 500;
          width: 100%;
        `}
      >
        <h1 data-aos='fade-right'>my techs.</h1>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;

            & > div {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 3rem;
            }

            img {
              width: 300px;
              object-fit: contain;
              transition: 0.3s;
            }

            & > .icons > div {
              font-size: 3rem;
              color: ${colors.fg};
              display: flex;
              flex-direction: column;
              align-items: center;
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(0px);
              -webkit-backdrop-filter: blur(0px);
              border-radius: 10px;
              padding: 1rem 0;
              transition: 0.3s;

              &:hover svg {
                transform: translateY(0.05rem);
              }

              &:hover p {
                opacity: 1;
              }

              svg {
                transition: 0.3s;
                transform: translateY(-1rem);
              }

              p {
                color: ${colors.fg1};
                font-weight: 400;
                margin: 0;
                font-size: 1.2rem;
                transition: 0.3s;
                opacity: 0;
                transform: translateY(-0.5rem);
              }
            }
          `}
        >
          <div className='icons' data-aos='fade-right'>
            {frontendIcons.map((Icon, i) => (
              <div key={Icon.toString()}>
                <p>{frontendNames[i]}</p>
                <Icon />
              </div>
            ))}
          </div>

          <Image src={donut} data-aos='zoom-in' />

          <div className='icons' data-aos='fade-left'>
            {backendIcons.map((Icon, i) => (
              <div key={Icon.toString()}>
                <p>{backendNames[i]}</p>
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
