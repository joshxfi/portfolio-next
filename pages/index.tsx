/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import mq from "../styles/mediaQuery";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Homepage } from "../components/Homepage";
import { Projects } from "../components/Projects";
import { Technologies } from "../components/Technologies";

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      css={css`
        position: relative;
        overflow: hidden;

        ${mq} {
          nav {
            .navigation > a {
              display: none;
            }

            .navigation > svg {
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
              right: 80px;
              font-size: 1rem;
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

      <div
        onClick={() => setShowMenu(false)}
        css={css`
          overflow: hidden;
          filter: ${showMenu ? "blur(4px)" : undefined};
        `}
      >
        <Homepage />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <GlobalStyle />
    </div>
  );
};

export default App;
