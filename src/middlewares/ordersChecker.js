import OrdersServices from '../services/ordersServices';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import ProductServices from '../services/productServices';

const {
  getOrders,
  ordersExists,
  getPayedOrders,
} = OrdersServices;
const {
  errorResponse,
} = responseHandler;
const {
  badRequest,
} = statusCode;
const {
  noproducts,
} = responseMessage;
const {
  productExists,
  updateProduct,
} = ProductServices;

const doesOrdersExist = async (req,res,next) => {
  let orders;
  const {id} = req.params;
  orders = await getOrders(id);
  if(orders){
    req.orders=orders.dataValues;
    return next();
  }
  return errorResponse(res,badRequest,'That order does not exist');
}
const doesOrderedProductExist = async (req, res, next) => {
  
  let product;
  product = await productExists('id', req.body.productId);
  if (product) {
    return next();
  }
  return errorResponse(res, badRequest, noproducts);
};
const isOrderYours = async (req, res, next) => {
  const {sessionUser} = req;
  const {id} = req.params;
  const order = await getOrders(id);
  if(order.orderedBy == sessionUser.id){
    return next();
  }
  return errorResponse(res, badRequest, 'This is not your order');
}
const isOrderPayed = async (req, res, next) => {
  const {id} = req.params;
  const order = await getPayedOrders(id);  
  if(order.status == 'pending'){
    return next();
  }
  if(order.status == 'canceled'){
    return errorResponse(res, badRequest, 'This is order is canceled');
  }
  return errorResponse(res, badRequest, 'This is order is payed or delivered');
}

export default { doesOrdersExist, doesOrderedProductExist, isOrderYours, isOrderPayed }