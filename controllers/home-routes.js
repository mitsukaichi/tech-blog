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
      res.render('homepage', { posts, loggedIn: req.session.loggedIn  });
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

// Login page - redirect user to the home page if the user is already logged in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});

// Signup page - redirect user to the home page if the user is already logged in
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
});

// Dashboard - show all the blog titles the signin user posted

router.get('/dashboard', async (req, res) => {
  if (req.session.loggedIn) {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
            where: {id: req.session.req.session.user_id}
          },
        ],
      });
      let posts = [];
      for (i = 0; i < dbPostData.length; i++) {
        posts.push(dbPostData[i].dataValues);
        posts[i].username = dbPostData[i].dataValues.user.dataValues.username;
      };
      res.render('dashboard', { posts, loggedIn: req.session.loggedIn  });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.render('dashboard')
  }
});

// New post page
router.get('/newpost', (req, res) => {res.render('newpost', { loggedIn: req.session.loggedIn });});

module.exports = router;