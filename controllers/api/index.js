const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const ratingRoutes = require('./rating-routes');

const photoRoutes = require('./photo-routes')

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/ratings', ratingRoutes);
router.use('/upload', photoRoutes)

module.exports = router;