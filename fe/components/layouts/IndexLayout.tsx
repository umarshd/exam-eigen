import Head from "next/head";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

export default function IndexLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
