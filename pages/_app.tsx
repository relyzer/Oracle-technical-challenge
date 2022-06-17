import React from "react";

import "../styles/index.css";
import type { AppProps } from "next/app";

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux_reducers/rootReducer"


const store = configureStore({
  reducer: rootReducer,
})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
