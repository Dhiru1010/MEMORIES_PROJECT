import React from 'react'
import Styles from './postStyle';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const post = ({ post, setCurrentId }) => {
    const classes = Styles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size='small'
                    onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>{post.message} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant='contained' color='primary' onClick={() => { }}>
                    <ThumbUpAltIcon fontSize='medium' />
                    Like
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => { }}>
                    <DeleteIcon fontSize='medium' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default post