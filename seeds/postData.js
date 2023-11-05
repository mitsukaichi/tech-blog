const { Post } = require('../models');

const postdata = [
    {
        title: 'My first post',
        content: 'I like the template engines, my favorite one is handlebar!',
        author_id: 1,
    },
    {
        title: 'My second post',
        content: 'I started to hate the template engines, I am not so sure if I still like the handlebar.',
        author_id: 1,
    },
    {
        title: 'CSS framworks',
        content: 'CSS framworks are awesome, I will never write my own custom CSS again.',
        author_id: 2,
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;