import { combineReducers } from '@reduxjs/toolkit';
import posts from './posts';

const rootReducer = combineReducers({
    posts: posts
});

export default rootReducer;