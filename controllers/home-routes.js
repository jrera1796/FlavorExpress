const router = require('express').Router();
const {
    User,
    Rating,
    Recipe
} = require('../models');

router.get('/recipes', (req, res) => { //get all recipe for recipes
    Recipe.findAll({ //find all recipes
        attributes: ['id', 'photo_path', 'created_at'],
        include: [{ //include its associated Rating
                model: Rating,
                attributes: ['id', 'rating_comment', 'rating_score'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }, //include its associated User
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(recipeData => {
        const recipes = recipeData.map(recipe => recipe.get({
            plain: true
        }));
        res.render('recipes', {
            recipes,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/recipe/:id', (req, res) => { //get single recipe
    Recipe.findOne({
        where: {
            id: req.params.id
        }, //find by its `id`
        attributes: ['id', 'title', 'ingredients', 'direction', 'photo_path', 'created_at'],
        include: [{ //include its associated Rating
                model: Rating,
                attributes: ['id', 'rating_comment', 'rating_score', 'recipe_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }, //include its associated User
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(recipeData => {
        if (!recipeData) {
            res.status(404).json({
                message: 'Recipe Not Found'
            });
            return;
        }
        const recipe = recipeData.get({ plain: true });

        recipe.ingredients = recipe.ingredients.split('\n');
        recipe.direction = recipe.direction.split('\n');
        res.render('single-recipe', { recipe, loggedIn: req.session.loggedIn });
    }).catch(err => { res.status(500).json(err); });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;