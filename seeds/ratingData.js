const { Rating } = require('../models');

const ratingData = [
  {
    rating_comment: 'I really like this recipe',
    rating_score: 5,
   
  },
 
];

const seedRating = () => Rating.bulkCreate(ratingData);

module.exports = seedRating;