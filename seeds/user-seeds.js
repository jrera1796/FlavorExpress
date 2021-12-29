const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userdata = [{
        username: 'kcheykim1',
        email: 'kcheykim1@gmail.com',
        password: 'password123'
    },
    {
        username: 'scheykim2',
        email: 'scheykim2@gmail.com',
        password: 'password123'
    },
    {
        username: 'pcheykim3',
        email: 'pcheykim3@gmail.com',
        password: 'password123'
    },
    {
        username: 'vmartinez4',
        email: 'vmartinez4@gmail.com',
        password: 'password123'
    },
    {
        username: 'bmartinez5',
        email: 'bmartinez5@gmail.com',
        password: 'password123'
    },
    {
        username: 'pmartinez6',
        email: 'pmartinez6@gmail.com',
        password: 'password123'
    },
    {
        username: 'abratcher7',
        email: 'abratcher7@gmail.com',
        password: 'password123'
    },
    {
        username: 'dbratcher8',
        email: 'dbratcher8@gmail.com',
        password: 'password123'
    },
    {
        username: 'jbratcher9',
        email: 'jbratcher9@gmail.com',
        password: 'password123'
    },
    {
        username: 'tbratcher10',
        email: 'tbratcher10@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;