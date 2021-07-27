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
      <meta name='title' content='Josh Daniel Bañares' />
      <meta
        name='description'
        content="My name is Josh Daniel Bañares, a React.js developer & enthusiast based in the Philippines. I'm a 17 year-old self-taught developer."
      />
      <meta
        name='keywords'
        content='joshxfi, josh daniel bañares, xfi, 88xfi'
      />
      <meta name='robots' content='index, follow' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='language' content='English' />
      <meta name='author' content='Josh Daniel Bañares' />
      <title>Josh Daniel Bañares</title>
    </Head>
  );
};
