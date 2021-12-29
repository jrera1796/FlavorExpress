const { Rating } = require('../models');

const ratingData = [
  {
    rating_comment: 'I really like this recipe',
    rating_score: 5,
   
  },
   {
    rating_comment: "I don't like this recipe",
    rating_score: 1,
   
  },
  {
    rating_comment: 'I like this pie',
    rating_score: 3,
   
  },
];

const seedRating = () => Rating.bulkCreate(ratingData);

module.exports = seedRating;