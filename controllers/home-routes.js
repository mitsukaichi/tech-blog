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
      res.render('homepage', { posts });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
// Get a single post with comment for the post detail page
router.get('/blog/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                include: {
                    model: User
                }
            }
        ],
      });
    const post = {
        id: dbPostData.dataValues.id,
        title: dbPostData.dataValues.title,
        content: dbPostData.dataValues.content,
        creation_date: dbPostData.dataValues.creation_date,
        author_name: dbPostData.dataValues.user.dataValues.username,
        comments: []
    };
    for (i = 0; i < dbPostData.dataValues.comments.length; i++) {
        post.comments.push({
            comment: dbPostData.dataValues.comments[i].dataValues.content,
            username: dbPostData.dataValues.comments[i].dataValues.user.dataValues.username,
            creation_date: dbPostData.dataValues.comments[i].dataValues.creation_date,
        })
    };
    // return the post object and loggedIn status in the req.session to determine if user can leave comments or not
    res.render('blog', { post ,  loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

// Get all posts you wrote in the dashboard page

module.exports = router;