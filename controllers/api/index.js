const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ratingRoutes = require('./ratingRoutes');
const recipeRoutes = require('./recipeRoutes');
//const photoRoutesLocal = require('./photoRoutesLocal')

router.use('/ratings', ratingRoutes);
router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);
//router.use('/upload', photoRoutesLocal)

module.exports = router;