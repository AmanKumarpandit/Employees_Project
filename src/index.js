import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import {createStore ,applyMiddleware ,compose } from 'redux';
import thunk from 'redux-thunk';

import App from "./App";
import reducers from './reducers';

const rootElement = document.getElementById("root");

const store =createStore(reducers ,compose(applyMiddleware(thunk)));

ReactDOM.render(
 
   <Provider store={store}>
     <App />
   </Provider>,
  
  rootElement
);
