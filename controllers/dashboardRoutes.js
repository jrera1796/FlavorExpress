const router = require('express').Router();
const {
    User,
    Recipe,
    Rating
} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => { //get all recipe for dashboard
    Recipe.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'photo_path', 'created_at'],
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
        res.render('dashboard', {
            recipes,
            loggedIn: true
        });
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Recipe.findByPk(req.params.id, {
        attributes: ['id', 'title', 'photo_path', 'created_at'],
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
        if (recipeData) {
            const recipe = recipeData.get({
                plain: true
            });
            res.render('edit-recipe', {
                recipe,
                loggedIn: true
            });
        } else {
            res.status(404).end();
        }
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;