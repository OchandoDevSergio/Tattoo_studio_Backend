'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Design.belongsTo(models.Artist, {
        foreignKey: 'artist_id'
      });
    }
  }
  Design.init({
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Design',
  });
  return Design;
};