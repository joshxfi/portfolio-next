/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../styles/colors";
import mq from "../styles/mediaQuery";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGmail } from "react-icons/si";

export const Footer: React.FC = () => {
  return (
    <>
      <footer
        css={css`
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: ${colors.fg1};
          background: #000;

          div {
            padding-right: 10rem;
          }

          p {
            padding-left: 10rem;
          }

          ${mq} {
            justify-content: center;
            flex-direction: column;

            div {
              padding-right: 0;
            }

            p {
              padding-left: 0;
            }
          }
        `}
      >
        <p>© Josh Daniel Bañares 2021 • All Rights Reserved</p>
        <div
          css={css`
            font-size: 20px;

            a:not(:last-child) {
              margin-right: 40px;
            }

            a:hover {
              transition: 0.3s;
              color: ${colors.fg2};
            }
          `}
        >
          <FooterLinks href='https://github.com/joshxfi' Icon={SiGithub} />
          <FooterLinks href='https://discord.gg/qWXYA6PZjh' Icon={SiDiscord} />
          <FooterLinks
            href='https://www.instagram.com/josh.xfi/'
            Icon={SiInstagram}
          />
          <FooterLinks
            href='mailto:joshxfi.dev@gmail.com'
            target='_self'
            Icon={SiGmail}
          />
        </div>
      </footer>
    </>
  );
};

const FooterLinks: React.FC<FooterLinksProps> = ({ href, target, Icon }) => {
  return (
    <a href={href} target={target} rel='noreferrer'>
      <Icon />
    </a>
  );
};

FooterLinks.defaultProps = {
  target: '_blank',
};