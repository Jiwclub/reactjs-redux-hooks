import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers/index"

//createStore ทำให้ subcomponent ทุกตัวเข้าถึง store
const store = createStore(reducers, applyMiddleware(thunk, logger));

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
