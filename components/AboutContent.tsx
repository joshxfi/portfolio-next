/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";

interface AboutContentProps {}

export const AboutContent: React.FC<AboutContentProps> = ({}) => {
  const arrow = () => {
    return <span className='active'>▸</span>;
  };

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
        position: relative;
        a {
          font-size: 15px;
        }
        div {
          background: ${colors.bg};
          color: ${colors.fg1};
          padding: 1em 1.5em;
          border: 2px solid ${colors.fg2};
          border-radius: 8px;
          h1 {
            color: ${colors.fg2};
            font-size: 20px;
          }
        }
      `}>
      <h1>about me</h1>
      <div className='fc'>
        <h1>who?</h1>
        <p>
          Hey there! My name is Josh Daniel, a React.js developer & enthusiast
          in the Philippines.
        </p>
        <p>
          {arrow()} self-taught developer <br />
          {arrow()} senior highschool student <br />
          {arrow()} professional procrastinator <br />
          {arrow()} constantly in discombobulation
        </p>
      </div>

      <div>
        <h1>current techs.</h1>
        <p>
          {arrow()} React.js <br />
          {arrow()} JavaScript <br />
          {arrow()} TypeScript <br />
          {arrow()} Emotion.sh <br />
          {arrow()} Sass
        </p>
      </div>

      <div>
        <h1>hobbies.</h1>
        <p>
          {arrow()} 🎮 gaming <br />
          {arrow()} 💻 coding <br />
          {arrow()} 📚 learning <br />
          {arrow()} 🏃‍♂️ running <br />
          {arrow()} 😜 procrastinating
        </p>
      </div>
    </div>
  );
};
