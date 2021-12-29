const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}
//Expects {rating_comment: "I like pie", rating_score: "5", user_id: "2", recipe_id: "1"}
Rating.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    rating_comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rating_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'recipe',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rating'
});

module.exports = Rating;