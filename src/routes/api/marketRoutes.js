import express from 'express';
import MarketController from '../../controllers/marketControllers';
import marketMiddlewares from '../../middlewares/marketChecker';
import marketvalidations from '../../middlewares/marketValidation';
import userAuthentication from '../../middlewares/authMiddlewares';

const {
    marketDeletion,
    getOneMarket,
    saveMarket,
    getAll,
    getOneByMarket,
    marketUpdation,
} = MarketController;
const {
  isUserAdmin,
  isUserLoggedIn,
} = userAuthentication;
const {
    doesMarketExist,
} = marketMiddlewares;
const {
    marketValidation,
} = marketvalidations;
const marketRouter = express.Router();

marketRouter.post('/add', isUserLoggedIn, isUserAdmin, marketValidation, saveMarket);
marketRouter.delete('/:id',isUserLoggedIn, isUserAdmin, doesMarketExist, marketDeletion);
marketRouter.get('/',getAll);
marketRouter.get('/name',isUserLoggedIn, isUserAdmin,getOneByMarket);
marketRouter.get('/:id',isUserLoggedIn, isUserAdmin, doesMarketExist, getOneMarket);
marketRouter.patch('/:id',isUserLoggedIn, isUserAdmin, doesMarketExist, marketUpdation);

export default marketRouter;
