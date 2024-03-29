import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Styles from './postsStyle';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = Styles();
  console.log(posts);
  return (

    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container spacing={3}>
        {
          posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Posts