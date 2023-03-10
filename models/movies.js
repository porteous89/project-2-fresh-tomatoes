const sequelize = require('../config/connection'); 
const { Model, DataTypes } = require('sequelize');

class Movie extends Model {}

Movie.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.DATE,//YYYY-MM-DD
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT, 
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        comments: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        totalRating: { //total rating value from all users combined
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        totalComments: { //total number of comments from all users combined
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'movie',
    }
)

module.exports = Movie;