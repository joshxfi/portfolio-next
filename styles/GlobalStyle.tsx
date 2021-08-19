/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx, Global } from "@emotion/react";
import colors from "./colors";

export const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&display=swap");
        * {
          font-family: "Arimo", sans-serif;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        html {
          scroll-behavior: smooth;
        }

        a {
          text-decoration: none;
          color: ${colors.fg1};
        }

        ul {
          list-style: none;
        }

        ::selection {
          background: ${colors.fg};
          color: ${colors.bg};
        }

        body {
          margin: 0;
          padding: 0;
          background: ${colors.bg};
          color: ${colors.fg};
          overflow-x: hidden;
        }

        .active {
          color: ${colors.fg};
        }

        ::-webkit-scrollbar-track {
          background-color: ${colors.bg};
        }

        ::-webkit-scrollbar {
          width: 5px;
          height: 10px;
          background-color: ${colors.bg};
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${colors.fg3};
          border-radius: 8px;
        }
      `}
    />
  );
};
