const express = require('express');
const multer = require('multer');
const Post = require('../model/post');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
};
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error('Invalid mime type');
        if (isValid) {
            error = null;
        }
      cb(error, 'backend/images');
    },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
});

//route setup

// route for adding  posts
router.post(
  '',
  checkAuth,
  multer({storage: storage}).single('image'),
  postController.addPost
);
// route for get all posts from the currently logged in user.
router.get('', checkAuth, postController.getPosts);
// route which gets the post to the given id.
router.get('/:id', postController.getPost);
// route for updating a post.
router.put(
  '/:id',
  multer({storage: storage}).single('image'),
  postController.updatePosts
);
// route for deleting a post.
router.delete('/:id', checkAuth, postController.deletePosts);
module.exports = router;
