/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../styles/colors";
import mq from "../styles/mediaQuery";
import Image from "next/image";
import codeblock from "../public/img/codeblock.png";
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
  const frontendNames: string[] = ["React.js", "Next.js", "TailwindCSS", "Sass"];

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
          div > h1 {
            font-size: 3rem;
          }

          div > .icons > div > p {
            font-size: 1rem;
          }

          p {
            font-size: 1rem;
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

            & > .icons {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 3rem;
            }

            .img {
              width: 300px;
              margin: 0 auto;
              object-fit: contain;
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
              min-width: 5rem;

              &:hover svg {
                transform: translateY(1.5rem);
              }

              &:hover p {
                opacity: 1;
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
                opacity: 0;
                transform: translateY(1rem);
              }
            }

            ${mq} {
              grid-template-columns: 1fr;
              padding-bottom: 10rem;
              gap: 1rem;

              .icons {
                gap: 1rem;
              }

              .img {
                width: 150px;
                margin: 2rem auto;
                display: none;
              }

              .icons > div {
                p {
                  transform: translateY(0);
                }

                svg {
                  transform: translateY(-1rem);
                }

                &:hover svg {
                  transform: translateY(0.1rem);
                }
              }
            }
          `}
        >
          <div className='icons' data-aos='fade-up'>
            {frontendIcons.map((Icon, i) => (
              <div key={Icon.toString()}>
                <p>{frontendNames[i]}</p>
                <Icon />
              </div>
            ))}
          </div>

          <div className='img'>
            <Image className='img' src={codeblock} data-aos='zoom-in' />
          </div>

          <div className='icons' data-aos='fade-up'>
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
