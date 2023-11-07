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
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
// Update a post
router.put('/', async (req, res) => {
    try {
      const postData = await Post.update(req.body, {
        where: {
          id: req.body.id,
        },
      });
      if (!postData[0]) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// Delete a post
router.delete('/', async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.body.id,
        },
      });
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Create a post

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author_id: req.session.user_id,
    });
  if (newPost) {
    res.status(200).json(newPost);
  } else {
    res.status(400).json({ message: 'Failed to post a new blog' });
  }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;