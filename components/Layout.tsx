/** @jsx jsx */
/** @jsxRuntime classic */
import React from "react";
import Head from "next/head";
import { css, jsx } from "@emotion/react";
import mq from "../styles/mediaQuery";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
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
      <Head>
        <link rel='manifest' href='/site.webmanifest' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='google-site-verification'
          content='Enyu2q9yMt05fTlkT0JcCz3Z9tZA84VVPeBLui9XMyc'
        />
        <meta
          name='google-site-verification'
          content='v4O-sG2j0id5t1L4kPOuuLLA88MCJksWUUz6-H_Ni5E'
        />
        <meta name='title' content='Josh Daniel Bañares | Portfolio' />
        <meta
          name='description'
          content='A React.js developer based in the Philippines. A dedicated individual in learning full-stack web technologies. Autodidactic but constantly discombobulated.'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='author' content='Josh Daniel Bañares' />

        <meta property='og:title' content='Josh Daniel Bañares | Portfolio' />
        <meta
          property='og:description'
          content='A React.js developer based in the Philippines. A dedicated individual in learning full-stack web technologies. Autodidactic but constantly discombobulated.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://xfi.vercel.app' />
        <meta
          property='og:image'
          content='https://user-images.githubusercontent.com/69457996/130031826-143a1ab0-26b0-4ba0-8803-7316adf1d770.png'
        ></meta>
        <meta
          property='twitter:image'
          content='https://user-images.githubusercontent.com/69457996/130031826-143a1ab0-26b0-4ba0-8803-7316adf1d770.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:description'
          content='A React.js developer based in the Philippines. A dedicated individual in learning full-stack web technologies. Autodidactic but constantly discombobulated.'
        />
        <meta
          property='twitter:title'
          content='Josh Daniel Bañares | Portfolio'
        />

        <title>Josh Daniel Bañares | Portfolio</title>
      </Head>
      {children}
    </main>
  );
};
