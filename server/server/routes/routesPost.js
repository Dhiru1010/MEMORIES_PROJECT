const express = require('express');
const controllerPost = require('../controllers/controllerPost');

const router = express.Router();

//post/
router.get('/', controllerPost.getPost);
router.post('/', controllerPost.createPost);
router.patch('/:id', controllerPost.updatePost);

module.exports = router;