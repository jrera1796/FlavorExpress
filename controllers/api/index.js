const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipeRoutes');
const ratingRoutes = require('./ratingRoutes');

//const photoRoutesLocal = require('./photoRoutesLocal')
router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/ratings', ratingRoutes);
//router.use('/upload', photoRoutesLocal)

module.exports = router;