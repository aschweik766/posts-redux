import * as api from '../api';
import axios from 'axios';
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}
//Action creators//


// export const getPosts = () => async (dispatch) => {

//     try {
//         const { data } = await api.fetchPosts()
//         dispatch({ type: 'FETCH_ALL', payload: data })
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// export const createPost = createAsyncThunk(post, async () => {
// export const createPost = (post) => async (dispatch) => {
//     try {
//         const { data } = await api.createPost(post);
//         dispatch({type: 'CREATE', payload: data});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
export const getPosts = createAsyncThunk('getPosts', async () => {
    const response = await axios.fetchPosts()
    return response.data
})


export const createPost = createAsyncThunk('createPost', async (newPost) => {
    const response = await axios.post(api.baseUrl, newPost)
    return response.data
})

export const postSlices = createSlice({
    name: 'post',
    initialState: {},
    // Using the map object notation
    extraReducers: {
        // Handle the pending state
        [getPosts.pending]: (state, action) => {
            state.loading = true;
        },
        // Handle the fullfilled state
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.postsList = action.payload;
        },
        // Handle the rejected state
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});