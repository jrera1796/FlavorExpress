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


module.exports = { User, Rating, Recipe };