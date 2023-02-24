import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js'
import axios from 'axios';
import uuid from 'react-uuid';

const baseUrl = 'http://localhost:5000/posts';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });

  } catch (error) {
    console.log(error.message);
  }
};

export const createPostAction = (postData, history) => {
  return (dispatch) => {
    api.createNewPost(postData).then((res) => {
      console.log('the result' + res.data );
      history.push(`${baseUrl}/${res.data._id}`);
    })  
    dispatch({ type: CREATE, payload: postData});
  }
}


// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);
//     console.log('data updated ' + data);
//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// }




export const updatePost =  (id, post) => {
  return (dispatch) => {
 // make put request to create people
     fetch(`${baseUrl}/` + id, {
      method: "put",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
    // update list of people
    dispatch({type: UPDATE, payload: post})
  }
 
}

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
