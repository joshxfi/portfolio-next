/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import { css, jsx } from "@emotion/react";
import colors from "../styles/colors";
import Image from "next/image";

export const Project: React.FC<ProjectProps> = ({ img, title, desc, url }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
        margin-bottom: 5rem;

        img {
          border-radius: 1rem;
          transition: 0.3s;
          filter: grayscale(100%);

          &:hover {
            filter: grayscale(0);
          }
        }

        p {
          color: ${colors.fg1};
          margin: 0;
          padding-right: 1rem;
          font-size: 1.5rem;
          line-height: 2.5rem;
        }
      `}
    >
      <a data-aos='fade-up-right' href={url} target='_blank' rel='noreferrer'>
        <Image src={img} alt='an image that displays a project.' />
      </a>

      <p data-aos='fade-up-left'>
        <b>{title}:</b> {desc}
      </p>
    </div>
  );
};
