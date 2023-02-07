import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  if (action.type === CREATE) {
    const addNewPosts = [...posts];
    addNewPosts.push(action.payload);
    return {
        ...posts,
        addNewPosts,
    };
  }
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    // case CREATE:
    //   return ([...posts, action.payload]);
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};