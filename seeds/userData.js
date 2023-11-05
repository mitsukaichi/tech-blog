const { User } = require('../models');

const userdata = [
    {
        username: 'testuser1',
        email: 'test1@gmail.com',
        password: 'test123',
    },
    {
        username: 'testuser2',
        email: 'test2@gmail.com',
        password: 'test3456@',
    },
    {
        username: 'testuser3',
        email: 'test3@gmail.com',
        password: '&&test7890_@',
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;