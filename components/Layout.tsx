import React from "react";
import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title} | Virtual Slime</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        />
      </Head>

      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to Virtual Slime",
  keywords:
    "development, coding, programming, linux, rust, python, javascript, go",
  description: "便利なツールを作るのが好きなエンジニアのブログとそのツールです",
};
