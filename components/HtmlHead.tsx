import React from "react";
import Head from "next/head";

export const HtmlHead: React.FC = () => {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='Hey there! My name is Josh Daniel Bañares, a React.js developer & enthusiast based in the Philippines.'
      />
      <meta name='robots' content='index, follow' />
      <meta name='author' content='Josh Daniel Bañares' />
      <meta
        name='google-site-verification'
        content='XD3_-IfquEHcoYhlm_0vuGLh5ZTmS5XcAVgqLpL1f5s'
      />
      <title>Josh Daniel</title>
    </Head>
  );
};
