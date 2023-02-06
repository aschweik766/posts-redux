import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createNewPost(post);
    dispatch({ type: CREATE, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
// export const getPosts = createAsyncThunk('getPosts', async () => {
//     const response = await axios.fetchPosts()
//     return response.data
// })


// export const createPost = createAsyncThunk('createPost', async (newPost) => {
//     const response = await axios.post(api.baseUrl, newPost)
//     return response.data
// })

// export const postSlices = createSlice({
//     name: 'post',
//     initialState: {},
//     // Using the map object notation
//     extraReducers: {
//         // Handle the pending state
//         [getPosts.pending]: (state, action) => {
//             state.loading = true;
//         },
//         // Handle the fullfilled state
//         [getPosts.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.postsList = action.payload;
//         },
//         // Handle the rejected state
//         [getPosts.rejected]: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         }
//     }
// });