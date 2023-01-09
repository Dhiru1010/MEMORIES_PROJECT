import axiox from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axiox.get(url);
export const createPost = (newPost) => axiox.post(url, newPost)
export const updatePost = (id, updatedPost) => axiox.post(`${url}/${id}`, updatePost);