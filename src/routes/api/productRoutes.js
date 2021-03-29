import express from 'express';
import ProductController from '../../controllers/productControllers';
import multiparty from 'connect-multiparty';
import authentication from '../../middlewares/authMiddlewares';
import productValidation from '../../middlewares/productValidation';
import productChecker from '../../middlewares/productChecker';

const multipart = multiparty();

const { isUserLoggedIn, isUserAdmin } = authentication;
const {
  createProductValidation,
  searchProductName,
  updateProductValidation,
} = productValidation;

const { 
    doesProductExist, 
    doesProductNameExist 
} = productChecker;

const productRouter = express.Router();

productRouter.post(
  '/add',
  multipart,
  isUserLoggedIn,
  isUserAdmin,
  createProductValidation,
  ProductController.addProduct
);
productRouter.get('/', ProductController.getAll);
productRouter.get('/searchname', searchProductName, ProductController.searchName);
productRouter.get('/searchany', searchProductName, ProductController.searchAny);
productRouter.get('/any', ProductController.searchByAny);
productRouter.delete(
  '/:id',
  isUserLoggedIn,
  isUserAdmin,
  doesProductExist,
  ProductController.delete
);
productRouter.patch(
  '/:id',
  multipart,
  isUserLoggedIn,
  isUserAdmin,
  doesProductExist,
  updateProductValidation,
  ProductController.productUpdation
);
productRouter.get('/:id', doesProductExist, ProductController.getOneProduct);

export default productRouter;
