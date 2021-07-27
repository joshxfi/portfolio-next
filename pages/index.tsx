/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useState } from "react";
import { css, jsx, Global } from "@emotion/react";
import colors from "../misc/colors";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Homepage } from "../components/Homepage";
import { Projects } from "../components/Projects";

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      css={css`
        position: relative;

        @media screen and (max-width: 768px) {
          nav {
            div {
              padding: 0 40px;
            }
            .navigation > a {
              display: none;
            }
            svg {
              display: block;
            }
          }

          main {
            flex-direction: column;
          }

          header {
            margin-top: 150px;
            display: grid;
            place-items: center;
            .about-btn {
              position: relative;
              bottom: 40px;
              right: 75px;
              font-size: 15px;
            }

            h1 {
              font-size: 8em;
            }

            .desc {
              position: relative;
              bottom: 40px;
            }

            .desc > h2 {
              font-size: 1.5rem;
            }
          }

          main > ul {
            position: relative;
            bottom: 100px;
            font-size: 3em;
          }
        }
      `}
    >
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />

      <div style={{ filter: showMenu ? "blur(4px)" : "" }}>
        <Homepage />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
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
            width: 100vw;
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
    </div>
  );
};

export default App;
