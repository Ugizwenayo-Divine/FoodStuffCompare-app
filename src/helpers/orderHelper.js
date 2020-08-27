import OrdersServices from '../services/ordersServices';

const {
  changeOrderStatus,
} = OrdersServices;

const clientOrderPayed = async (id) => {
    try{
      const data ={
        id,
        status:'payed',
      }
      await changeOrderStatus(data);
    }
    catch(err){
      return error;
    }
  }
export default {clientOrderPayed};