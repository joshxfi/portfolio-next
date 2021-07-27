import React from "react";
import Head from "next/head";

export const HtmlHead: React.FC = () => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content="Hey there! My name is Josh Daniel Bañares, a React.js developer & enthusiast based in the Philippines. I'm a 17 year-old self-taught full-stack MERN developer. I constantly procrastinate & in discombobulation."
      />
      <link rel='manifest' href='/site.webmanifest' />
      <meta name='robots' content='index, follow' />
      <meta name='author' content='Josh Daniel Bañares' />
      <meta
        name='google-site-verification'
        content='Enyu2q9yMt05fTlkT0JcCz3Z9tZA84VVPeBLui9XMyc'
      />
      <title>Josh Daniel</title>
    </Head>
  );
};
