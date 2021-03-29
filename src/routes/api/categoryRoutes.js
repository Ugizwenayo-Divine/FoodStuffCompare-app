import express from 'express';
import CategoryController from '../../controllers/categoryControllers';
import categoryMiddlewares from '../../middlewares/categoryMiddlewares';
import userAuthentication from '../../middlewares/authMiddlewares';

const {
    categoryDeletion,
    getAll,
    getOneCategory,
    saveCategory,
    searchName,
} = CategoryController;
const {
  isUserAdmin,
  isUserLoggedIn,
} = userAuthentication;
const {
    categoryValidation,
} = categoryMiddlewares;
const categoryRouter = express.Router();

categoryRouter.post('/add', isUserLoggedIn, isUserAdmin, categoryValidation, saveCategory);
categoryRouter.delete('/:id',isUserLoggedIn, isUserAdmin, categoryDeletion);
categoryRouter.get('/',getAll);
categoryRouter.get('/name',isUserLoggedIn, isUserAdmin, searchName);
categoryRouter.get('/:id',isUserLoggedIn, isUserAdmin, getOneCategory);

export default categoryRouter;
