const { Rating } = require('../models');

const ratingData = [{
        rating_comment: 'I really like this recipe',
        rating_score: 5,
        user_id: 7,
        recipe_id: 3

    },
    {
        rating_comment: "I don't like this recipe",
        rating_score: 1,
        user_id: 6,
        recipe_id: 3
    },
    {
        rating_comment: 'This was fun to make!',
        rating_score: 5,
        user_id: 6,
        recipe_id: 4
    },
    {
        rating_comment: 'Great recipe',
        rating_score: 3,
        user_id: 10,
        recipe_id: 5
    },
    {
        rating_comment: 'Just how mom used to make!',
        rating_score: 3,
        user_id: 2,
        recipe_id: 1
    },

];

const seedRating = () => Rating.bulkCreate(ratingData);

module.exports = seedRating;