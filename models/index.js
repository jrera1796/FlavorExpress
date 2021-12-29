const User = require('./User');
const Rating = require('./Rating');
const Recipe = require('./Recipe');
// const models = {Rating: require('./Rating')}

User.hasMany(Recipe, {
    foreignKey: 'user_id'
});

User.hasOne(Rating, {
    foreignKey: 'user_id'
});

Rating.belongsTo(Recipe, {
    foreignKey: 'rating_id'
})

User.hasMany(Recipe, { foreignKey: 'user_id' });

Recipe.belongsTo(User, { foreignKey: 'user_id', onDelete: 'SET NULL' });

Rating.belongsTo(User, { foreignKey: 'user_id', onDelete: 'SET NULL' });

Rating.belongsTo(Recipe, { foreignKey: 'recipe_id', onDelete: 'SET NULL' });

User.hasMany(Rating, { foreignKey: 'user_id', onDelete: 'SET NULL' });

Recipe.hasMany(Rating, { foreignKey: 'recipe_id' });

module.exports = { User, Recipe, Rating };