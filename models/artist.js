'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Artist.hasMany(models.Appointment, {
        foreignKey: 'artist_id'
      });

      Artist.hasMany(models.Design, {
        foreignKey: 'artist_id'
      });
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    portfolio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};