import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};
// https://stackoverflow.com/questions/52130918/web-api-error-this-request-has-been-blocked-the-content-must-be-served-over-h
// Upgrade insecure requests to allow http api calls
// However, if the external API does not have SSL to begin with, it will fail regardless.
// See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests

const Layout = ({ children, title = "Default title" }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
