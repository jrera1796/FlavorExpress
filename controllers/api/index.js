const router = require('express').Router();
const ratingRoutes = require('./ratingRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/rating', ratingRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;