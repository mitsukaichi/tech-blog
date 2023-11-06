const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Get all comments for the post
router.get('/:id', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include: [{ model: Post }, { model: User}],
        where: { post_id: req.params.id }
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Create a comment to the specific post
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.comment,
      post_id: req.body.post_id,
      author_id: req.session.user_id,
    });
  if (newComment) {
    res.status(200).json(newComment);
  } else {
    res.status(400).json({ message: 'Failed to add comment' });
  }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;