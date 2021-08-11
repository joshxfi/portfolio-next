/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";
import colors from "../misc/colors";
import { TiArrowShuffle } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Homepage: React.FC = () => {
  const icons = [FaLinkedin, FaDiscord, FaGithubSquare, FaInstagramSquare, FaTwitterSquare, FaFacebookSquare];
  const iconLinks = [
    "https://www.linkedin.com/in/josh-daniel-ba%C3%B1ares/",
    "#",
    "https://github.com/joshxfi",
    "https://www.instagram.com/josh.xfi/",
    "#",
    "#",
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <main
      css={css`
        height: 100vh;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
      `}
    >
      <header
        css={css`
          line-height: 0;

          h2 {
            font-size: 20px;
          }

          .desc > h2 {
            font-size: 50px;
            color: ${colors.fg1};
          }

          h1 {
            font-size: 150px;
          }

          button {
            background: none;
            outline: none;
            border: none;
            font-size: 17px;
            font-weight: 400;
            color: #8e9775;
            cursor: pointer;
          }
        `}
      >
        <motion.h1
          initial={{ x: -900, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          Josh
        </motion.h1>

        <div className='desc'>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
            self-taught full-stack
          </motion.h2>

          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
            developer
          </motion.h2>
        </div>

        <motion.a
          initial={{ x: -900, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className='about-btn'
          href='#about'
          css={css`
            cursor: pointer;
            color: ${colors.fg};
            display: flex;
            align-items: center;
            &:hover svg {
              color: ${colors.fg};
            }
            svg {
              color: ${colors.fg1};
              transition: 0.3s;
            }
          `}
        >
          <TiArrowShuffle />
          {"\u00A0"}about me
        </motion.a>
      </header>

      <motion.ul
        css={css`
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1em;
          font-size: 4em;
          padding: 0;

          li > a {
            color: ${colors.fg2};
          }
        `}
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {icons.map((Icon, i) => (
          <motion.li key={Icon.toString()} variants={item} whileHover={{ scale: 1.1 }}>
            <a href={iconLinks[i]} target='_blank' rel='noreferrer'>
              <Icon />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
};
