const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Get all posts for homepage
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
      let posts = [];
      for (i = 0; i < dbPostData.length; i++) {
        posts.push(dbPostData[i].dataValues);
        posts[i].username = dbPostData[i].dataValues.user.dataValues.username;
      };
      console.log(posts);
      res.render('homepage', { posts });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

// Get a single post with comment for the post detail page


// Get all posts you wrote in the dashboard page

module.exports = router;