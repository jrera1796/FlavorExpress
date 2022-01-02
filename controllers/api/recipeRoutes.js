const router = require('express').Router();
const { User, Recipe, Rating } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => { //recipe endpoints
    Recipe.findAll({ //find all recipes
            attributes: ['id', 'title', 'photo_path', 'created_at'],
            include: [{ //include its associated Rating
                    model: Rating,
                    attributes: ['id', 'rating_comment', 'rating_score'],
                    include: { model: User, attributes: ['username'] }
                }, //include its associated User
                { model: User, attributes: ['username'] }
            ]
        }).then(recipeData => res.json(recipeData))
        .catch(err => { res.status(500).json(err); });
});

router.get('/:id', (req, res) => { //get a specific recipe
    Recipe.findOne({
        where: { id: req.params.id }, //find by its `id`
        include: [{ //include its associated Rating
                model: Rating,
                attributes: ['id', 'rating_comment', 'rating_score'],
                include: { model: User, attributes: ['username'] }
            }, //include its associated User
            { model: User, attributes: ['username'] }
        ]
    }).then(recipeData => {
        if (!recipeData) {
            res.status(404).json({ message: 'Recipe Not Found' });
            return;
        }
        res.json(recipeData);
    }).catch(err => { res.status(500).json(err); });
});

router.post('/', withAuth, (req, res) => { //posting a new recipe
    Recipe.create({ //expecting ingredients, direction and photo upload
            title: req.body.title,
            ingredients: req.body.ingredients,
            direction: req.body.direction,
            photo_path: req.body.photo_path,
            user_id: req.session.user_id
        }).then(recipeData => res.json(recipeData))
        .catch(err => { res.status(500).json(err); });
});

router.put('/:id', withAuth, (req, res) => {
    Recipe.update({
        title: req.body.title,
        ingredients: req.body.ingredients,
        direction: req.body.direction,
        //upload new photo options here or path
    }, {
        where: { id: req.params.id }
    }).then(recipeData => {
        if (!recipeData) {
            res.status(404).json({ message: 'Recipe Not Found' });
        }
        res.json(recipeData);
    }).catch(err => { res.status(500).json(err); });
});

router.delete('/:id', withAuth, (req, res) => { //remove a specific recipe
    Recipe.destroy({ //delete recipe by its `id`
        where: { id: req.params.id }
    }).then(recipeData => {
        if (!recipeData) {
            res.status(404).json({ message: 'Recipe Not Found' });
            return;
        }
        res.json(recipeData);
    }).catch(err => { res.status(500).json(err); });
});

module.exports = router;