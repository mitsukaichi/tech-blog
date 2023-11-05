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

// Create a comment


module.exports = router;