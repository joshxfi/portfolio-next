import React from "react";
import Head from "next/head";

export const HtmlHead: React.FC = () => {
  return (
    <Head>
      <link rel='manifest' href='/site.webmanifest' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='google-site-verification'
        content='Enyu2q9yMt05fTlkT0JcCz3Z9tZA84VVPeBLui9XMyc'
      />
      <meta name='title' content='Josh Daniel Bañares | Portfolio' />
      <meta
        name='description'
        content='Portfolio by Josh Daniel Bañares, a 17 year-old self-taught React.js developer & enthusiast based in the Philippines.'
      />
      <meta name='robots' content='index, follow' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='author' content='Josh Daniel Bañares' />

      <meta property='og:title' content='Josh Daniel Bañares | Portfolio' />
      <meta
        property='og:description'
        content='Portfolio by Josh Daniel Bañares, a 17 year-old self-taught React.js developer & enthusiast based in the Philippines.'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://xfi.vercel.app' />
      <meta
        property='og:image'
        content='https://raw.githubusercontent.com/joshxfi/portfolio-next/main/public/thumbnail.jpg'
      ></meta>
      <meta property='twitter:card' content='website' />
      <meta
        property='twitter:description'
        content='Portfolio by Josh Daniel Bañares, a 17 year-old self-taught React.js developer & enthusiast based in the Philippines.'
      />
      <meta
        property='twitter:title'
        content='Josh Daniel Bañares | Portfolio'
      />
      <meta
        property='twitter:image'
        content='https://raw.githubusercontent.com/joshxfi/portfolio-next/main/public/thumbnail.jpg'
      />

      <title>Josh Daniel Bañares | Portfolio</title>
    </Head>
  );
};
