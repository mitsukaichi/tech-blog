const { Comment } = require('../models');

const commentdata = [
    {
        content: 'I like handlebar as well!',
        post_id: 1,
        author_id: 2,
    },
    {
        content: 'I don\'t agree with you',
        post_id: 1,
        author_id: 3,
    },
    {
        content: 'What happened to you!?!?',
        post_id: 2,
        author_id: 3,
    }
    
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;