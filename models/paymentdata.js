'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentData.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
    }
  }
  PaymentData.init({
    cardNumber: DataTypes.STRING,
    validThru: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentData',
  });
  return PaymentData;
};