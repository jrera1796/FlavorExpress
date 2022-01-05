const { Recipe } = require('../models');

const recipeData = [{
        title: 'Banana Nut Bread',
        ingredients: '2 cup of flour',
        direction: 'bake',
        express_hint: 'yes',
        photo_path: null,
        user_id: 1,
    },
    {
        title: 'Stir Fry',
        ingredients: 'Vegetables',
        direction: 'stir-fry',
        express_hint: 'yes',
        photo_path: null,
        user_id: 5,
    },
    {
        title: 'Five Spice Beef Sticks',
        ingredients: 'Beef',
        direction: 'bbq',
        express_hint: 'yes',
        photo_path: null,
        user_id: 4,
    },
    {
        title: 'Chicken Marinate',
        ingredients: 'Chicken',
        direction: 'marinate',
        express_hint: 'yes',
        photo_path: null,
        user_id: 3,
    },
    {
        title: 'Tofu Eggplants',
        ingredients: 'Tofu',
        direction: 'chop',
        express_hint: 'yes',
        photo_path: null,
        user_id: 2,
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;