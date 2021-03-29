import models from '../models';

const { Transaction, Order } = models;

class TransactionServices {
  static createTransaction = async (data) => {
    const {dataValues} = await Transaction.create({
      ...data,
      status: 'unverified',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'transactedBy',
        'transaction_id',
        'status',
        'order_id',
        'type',
        'phone_number',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllTransactions = async () => {
    const allTransaction = await Transaction.findAll({where: {status: 'verified'}, include: Order});
    return allTransaction;
  }
  static getOneTransaction = async (id) => {
    const allTransaction = await Transaction.findOne({ where: { id: id } });
    return allTransaction;
  }
  static getTransaction = async (id) => {
    const allTransaction = await Transaction.findOne({ where: { id: id }, include: Order });
    return allTransaction;
  }
  static updateStatus = async (data) => {
    const updatedTransaction = await Transaction.update(
      { 
        status: 'verified',
        transaction_id: data.transaction_id,
      }, 
      { where: { id: data.tx_ref } }
    );
    return updatedTransaction;
  }
  
}

export default TransactionServices;