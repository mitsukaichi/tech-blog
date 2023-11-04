const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Get all posts
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [{ model: User }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get a single post
router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }, { model: Comment }],
      });
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
// Get all posts by the user


// Update the post

// Delete the post


module.exports = router;