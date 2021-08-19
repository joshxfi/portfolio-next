/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../styles/colors";
import { BsArrowRight } from "react-icons/bs";

export const Menu: React.FC<MenuProps> = ({ showMenu, setShowMenu, navLink }) => {
  return (
    <div
      css={css`
        transition: 0.3s ease;
        height: 100vh;
        width: 30%;
        position: fixed;
        display: grid;
        place-items: center;
        z-index: 9;
        background: ${colors.bg};
      `}
      style={{ right: showMenu ? 0 : "-30%" }}
    >
      <ul
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          height: 70%;
          padding: 0;
          font-size: 15px;
          color: ${colors.fg1};
          li > svg {
            color: ${colors.fg2};
            font-size: 22px;
            cursor: pointer;
          }
        `}
      >
        <li>{navLink("about", "")}</li>
        <li>{navLink("skills", "")}</li>
        <li>{navLink("works", "")}</li>
        <li>{navLink("contact", "last")}</li>
        <li>
          <BsArrowRight onClick={() => setShowMenu(!showMenu)} />
        </li>
      </ul>
    </div>
  );
};
