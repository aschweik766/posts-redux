import React from "react";
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
    return (
        
            <h1>POST</h1>
        
    );
}

export default Post;