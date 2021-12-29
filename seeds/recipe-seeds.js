const { Recipe } = require('../models');

const recipeData = [{
        ingredients: '2 cup of flour',
        direction: 'bake',
        photo_path: null,
        user_id: 1,
        // rating_id: 1,
    },
    {
        ingredients: 'Vegetables',
        direction: 'stir-fry',
        photo_path: null,
        user_id: 5,
        // rating_id: 2,
    },
    {
        ingredients: 'Beef',
        direction: 'bbq',
        photo_path: null,
        user_id: 4,
        // rating_id: 3,
    },
    {
        ingredients: 'Chicken',
        direction: 'marinate',
        photo_path: null,
        user_id: 3,
        //rating_id: 4
    },
    {
        ingredients: 'Tofu',
        direction: 'chop',
        photo_path: null,
        user_id: 2,
        // rating_id: 5,
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;