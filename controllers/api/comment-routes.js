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
  console.log(req.body);
  console.log(req.session);
  res.json(req.body);
  // try {
  //   const newComment = await Comment.create({
  //     content: req.body.comment,
  //     post_id: post_id,
  //     author_id: author_id,
  //   });
  // if (newComment) {
  //   res.status(200).json(commentData);
  // } else {
  //   res.status(400).json({ message: 'Failed to add comment' });
  // }
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});


module.exports = router;