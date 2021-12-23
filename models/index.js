<<<<<<< HEAD
const models = {Rating: require('./Rating')}

module.exports = models;
=======
//importing all of the models: User, Recipe, Rating
//const User = require('./User');
const Recipe = require('./Recipe');
const Rating = require('./Rating');

//Recipe belongsTo User
//Recipe.belongsTo(User, { foreignKey: 'user_id' });

//User have many Recipe
//User.hasMany(Recipe, { foreignKey: 'user_id' });

//Recipe has many Rating
Recipe.hasMany(Rating, { foreignKey: 'rating_id' });


//module.exports = { User, Recipe, Rating};
module.exports = { Recipe, Rating };
>>>>>>> kcheykim/recipe_seed
