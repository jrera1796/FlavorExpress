const seedUsers = require('./user-seeds');
const sequelize = require('../config/connection');
const seedRating= require('./ratingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRating();

  process.exit(0);
};

seedAll();