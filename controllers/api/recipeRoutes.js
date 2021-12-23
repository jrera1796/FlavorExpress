const router = require('express').Router();
const { Recipe, Rating } = require('../../models');

router.get('/', (req, res) => { //recipe endpoints
    Recipe.findAll({ //find all recipes
            include: [{ //include its associated Rating
                model: Rating,
                attributes: ['id', 'rating_coment', 'rating_score']
            }],
            // include: [{ //include its associated User
            //     model: User,
            //     attributes: ['id']
            // }],
        }).then(recipeData => res.json(recipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => { //get one recipe
    Recipe.findOne({ //find a single recipe by its `id`
        where: { id: req.params.id },
        include: [{ //include its associated Rating
            model: Rating,
            attributes: ['id', 'rating_coment', 'rating_score']
        }],
        // include: [{ //include its associated User
        //     model: User,
        //     attributes: ['id']
        // }],
    }).then(ratingData => {
        if (!ratingData) {
            res.status(404).json({ message: 'Not Rated' });
            return;
        }
        res.json(ratingData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Recipe.destroy({ //delete one recipe by its `id` value
        where: { id: req.params.id },
    }).then((deleteRecipe) => {
        res.json(deleteRecipe);
    }).catch((err) => res.json(err));
});

module.exports = router;