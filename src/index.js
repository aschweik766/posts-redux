import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import store from './reducers'
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware, legacy_createStore, applyMiddleware} from '@reduxjs/toolkit';
import {reducers} from './reducers';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const intialState = {};

const middleware = [thunk];

const store = legacy_createStore(
  reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


// const store = configureStore({
//   reducer: reducers,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// })

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);