// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
// import {reducers} from './rootReducer';
// import thunkMiddleware from 'redux-thunk';

// const store = configureStore({
//   reducer: reducers,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
//   devTools: process.env.NODE_ENV !== 'production',

// })

// export default store;


import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts';

// const rootReducer = combineReducers({
//     posts: posts
// });

// export default rootReducer;

export const reducers = combineReducers({ posts });