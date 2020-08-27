import Sequelize from 'sequelize';
import models from '../models';

const { Order,User } = models;
const Op = Sequelize.Op;

class OrdersServices {
  static createOrders = async (data) => {
    const {dataValues} = await Order.create({
      ...data,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'orderedBy',
        'productId',
        'product',
        'amount',
        'currency',
        'ordered_quantity',
        'payment_options',
        'status',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllOrders = async () => {
    const allOrders = await Order.findAll({include: User });
    return allOrders;
  }
  static getOrders = async (id) => {
    const allOrders = await Order.findOne({ where: { id: id } });
    return allOrders;
  }
  static deleteOrders = async (id) => {
    const deletedOrders = await Order.destroy(
      { where: { id: id } }
    );
    return deletedOrders;
  }
  static getAllClientOrders = async (userId) => {
    const orders = await Order.findAll({ where: { orderedBy: userId, status : { [Op.ne]: 'canceled' } } });
    return orders;
  }
  static changeOrderStatus = async (order) => {
    const updatedOrders = await Order.update(
      { 
        status: order.status,
        due_time: null,
      }, 
      { where: { id: order.id } }
    );
    return updatedOrders;
  }
  static getOrdersStatusBased = async (status) => {
    const allOrders = await Order.findAll({ where: { status: status } });
    return allOrders;
  }
  static getAllPayedClientOrders = async () => {
    const orders = await Order.findAll({ where: { status : 'payed' } });
    return orders;
  }
  static async ordersExists(attr, val) {
    const orders = await Order.findOne({ where: { [attr]: val } });
    return orders;
  }
  static getPayedOrders = async (id) => {
    const allOrders = await Order.findOne({ where: { id: id } });
    return allOrders;
  }
  static getPayedClientOrders = async (id) => {
    const allOrders = await Order.findAll({ where: { id: id, status: 'payed' } });
    return allOrders;
  }
}

export default OrdersServices;