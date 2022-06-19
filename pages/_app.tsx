import React from "react";

import "../styles/index.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../redux-store/store";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
