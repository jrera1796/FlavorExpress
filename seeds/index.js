const seedUsers = require('./user-seeds');
const seedRecipes = require('./recipe-seeds');
const seedRating = require('./ratingData');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedRecipes();
    console.log('\n----- RECIPES SEEDED -----\n');

    await seedRating();
    console.log('\n----- RATINGS SEEDED -----\n');

    process.exit(0);
};

seedAll();