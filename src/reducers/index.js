import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

// const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const store = createStore(rootReducer, composeEnhancer);

// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware),
//   });


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== 'production',

})

// Store has all of the default middleware added, _plus_ the logger middleware

export default store;


