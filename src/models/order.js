'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: 'orderedBy' });
      Order.hasMany(models.Transaction, {
        foreignKey: 'order_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  Order.init({
    orderedBy: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    product: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    ordered_quantity: DataTypes.INTEGER,
    payment_options: DataTypes.STRING,
    status: DataTypes.ENUM('pending','payed','delivered','canceled','discounted')
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};