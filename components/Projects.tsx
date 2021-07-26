/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import proj1 from "../misc/josh.jpg";
import proj2 from "../misc/pskl2.jpg";
import proj3 from "../misc/task.jpg";
import proj5 from "../misc/andrea.jpg";
import proj6 from "../misc/liftoff.jpg";
import proj7 from "../misc/pskl.jpg";
import {
  SiHtml5,
  SiJavascript,
  SiSass,
  SiMongodb,
  SiReact,
  SiNodeDotJs,
  SiTypescript,
} from "react-icons/si";

export const Projects: React.FC = () => {
  const imgs = (imgName: any) => {
    return (
      <div>
        <img
          src={imgName}
          alt={imgName}
          css={css`
            border-radius: 16px;
            filter: grayscale(100%);
            &:hover {
              filter: grayscale(0%);
              transform: scale(1.05);
            }
          `}
        />
      </div>
    );
  };

  return (
    <section
      id='works'
      css={css`
        margin: 0 auto;
        min-height: 120vh;
        height: auto;
        display: grid;
        place-items: center;
        margin-top: 100px;
        h1 {
          font-size: 30px;
        }
        @media screen and (max-width: 768px) {
          div {
            grid-template-columns: 1fr;
          }
          div > div > div {
            width: 90%;
          }
        }
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2em;
          position: relative;
          h1 {
            font-size: 30px;
            grid-column: 1/3;
            padding: 0 1.5rem;
            position: absolute;
            top: -80px;
          }
          & > div {
            overflow: hidden;
            width: 400px;
          }
          & > div > div:last-of-type {
            padding: 0.5em;
            color: ${colors.fg2};
            font-size: 1.8em;
            svg:not(:last-of-type) {
              margin-right: 0.5em;
            }
            svg {
              transition: 0.3s;
            }
            svg:hover {
              transform: translateY(-3px);
            }
          }
          img {
            width: 400px;
            transition: 0.3s;
            cursor: cell;
          }
        `}
      >
        <h1>my works</h1>
        <div>
          {imgs(proj1)}
          <div>
            <SiHtml5 />
            <SiSass />
            <SiJavascript />
          </div>
        </div>

        <div>
          {imgs(proj2)}
          <div>
            {" "}
            <SiTypescript />
            <SiReact />
            <SiMongodb />
            <SiNodeDotJs />
          </div>
        </div>

        <div>
          {imgs(proj3)}
          <div>
            <SiTypescript />
            <SiReact />
          </div>
        </div>

        <div>
          {imgs(proj7)}
          <div>
            <SiReact />
            <SiMongodb />
            <SiNodeDotJs />
          </div>
        </div>

        <div>
          {imgs(proj5)}
          <div>
            {" "}
            <SiHtml5 />
            <SiSass />
            <SiJavascript />
          </div>
        </div>

        <div>
          {imgs(proj6)}
          <div>
            {" "}
            <SiHtml5 />
            <SiSass />
            <SiJavascript />
          </div>
        </div>
      </div>
    </section>
  );
};
