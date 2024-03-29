import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter }from 'react-router-dom'
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware} from '@reduxjs/toolkit';
import {reducers} from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const intialState = {};

const middleware = [thunk];

const store = legacy_createStore(
  reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Provider>
);