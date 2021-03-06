import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from 'redux';
import reducer from './reducers/some-reducer';
import { Provider } from 'react-redux'
import App from "./components/App";

const store = createStore(reducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>

        <Component/>

    </Provider>,
    document.getElementById("react-app-root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
