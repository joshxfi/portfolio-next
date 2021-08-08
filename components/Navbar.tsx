/** @jsx jsx */
/** @jsxRuntime classic */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { css, jsx } from "@emotion/react";
import colors from "../misc/colors";
import { FaBars } from "react-icons/fa";
import { Menu } from "./Menu";

interface NavbarProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ showMenu, setShowMenu }) => {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [delayNav, setDelayNav] = useState<boolean>(true);
  const [visited, setVisited] = useState<string>("home");

  if (typeof window !== "undefined") {
    let yBefore = window.pageYOffset;

    window.onscroll = function () {
      let yNow = window.pageYOffset;
      if (yBefore > yNow) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      yBefore = yNow;
    };

    window.addEventListener("load", () => {
      setTimeout(() => {
        setDelayNav(false);
      }, 2500);
    });
  }

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  const navLink = (navName: string, className: string) => {
    return (
      <a
        href={`#${navName}`}
        className={visited == navName ? `active ${className}` : `${className}`}
        onClick={() => setVisited(navName)}
        css={css`
          transition: 0.3s;

          &:hover {
            color: ${colors.fg};
          }
        `}
      >
        {navName}
      </a>
    );
  };

  return (
    <div>
      <motion.nav
        css={css`
          position: fixed;
          width: 100%;
          background: ${colors.bg};
          top: 0;
          z-index: 10;

          .navigation {
            display: flex;
            align-items: center;
            color: ${colors.fg1};
            font-size: 1rem;

            a:not(.last) {
              margin-right: 40px;
            }

            a {
              font-weight: 500;
            }
          }
        `}
        initial={{ y: -100 }}
        variants={variants}
        animate={showNav ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: delayNav ? 2 : 0 }}
      >
        <div
          css={css`
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
          `}
        >
          <div className='logo'>
            <h2>!xfi</h2>
          </div>

          <div className='navigation'>
            {navLink("about", "")} {navLink("techs", "")} {navLink("works", "")}
            {navLink("contact", "last")}
            <FaBars
              style={{ color: showMenu ? "lime" : "" }}
              onClick={() => setShowMenu(!showMenu)}
              css={css`
                display: none;
                font-size: 25px;
                z-index: 10;
              `}
            />
          </div>
        </div>
      </motion.nav>

      <Menu showMenu={showMenu} setShowMenu={setShowMenu} navLink={navLink} />
    </div>
  );
};
