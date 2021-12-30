const router = require('express').Router();
const ratingRoutes = require('./ratingRoutes');
const recipeRoutes = require('./recipeRoutes');
const photoRoutesLocal = require('./photoRoutesLocal')

router.use('/rating', ratingRoutes);
router.use('/recipes', recipeRoutes);
router.use('/upload', photoRoutesLocal)

module.exports = router;