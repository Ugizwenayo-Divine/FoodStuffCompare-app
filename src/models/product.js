
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: 'createdBy' });
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
      Product.belongsTo(models.Market, { foreignKey: 'marketId' });
      Product.hasOne(models.Order, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  Product.init({
    createdBy: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    marketId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    cloudinaryId: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};