'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Market extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Market.hasMany(models.Product, {
        foreignKey: 'marketId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  };
  Market.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    sector: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Market',
  });
  return Market;
};