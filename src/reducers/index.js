import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const store = createStore(rootReducer, composeEnhancer);

const store = configureStore({
    reducer: rootReducer,
    middleware: thunk,
  });

export default store;


