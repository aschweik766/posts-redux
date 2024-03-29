import axios from 'axios';

export const baseUrl = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(baseUrl);

// export const createNewPost = (newPost) => axios.post(baseUrl, newPost);

export const createNewPost = (postData) => {
    return axios.post(baseUrl, postData);
}
// export const updatePost = (id, updatedPost) => axios.put(`${baseUrl}/${id}`, updatedPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${baseUrl}/${id}`, updatedPost);

export const likePost = (id) => axios.patch(`${baseUrl}/${id}/likePost`);

export const deletePost = (id) => axios.delete(`${baseUrl}/${id}`);
