import _ from 'lodash';
import CategoryService from '../services/categoryServices';
import responseHandlers from '../helpers/responseHandler';
import statusCodes from '../helpers/statusCode';
import customMessages from '../helpers/customMessages';

const { successResponse, errorResponse } = responseHandlers;
const {
    createCategory,
    deleteCategory,
    getAllCategory,
    getCategory,
    getCategoryByName,
} = CategoryService;
const {
  conflict,
  badRequest,
  created,
  ok,
} = statusCodes;

export default class CategoryController {

  static async saveCategory(req, res) {
    const { name } = req.body;
    try{
      const category = await getCategoryByName(name.toLowerCase());
      if (category.length>0) {
        return errorResponse(res, conflict, 'the category with that name exists');
      }
      const savedCategory = await createCategory(name);
      return successResponse(res, created, 'Category created', null, savedCategory);
    }
    catch(err){
      errorResponse(res, badRequest, err.message);
    } 
  }
  static getAll = async (req, res) => {
    try {
      const categories = await getAllCategory();
      return successResponse(res, ok, 'All categories', null, categories);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getOneCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const getOneCategory = await getCategory(id);
      return successResponse(res, ok, 'the category', null, getOneCategory);
    } catch (error) {
      return errorResponse(res, badRequest, error.message);
    }
  };
  static searchName = async (req, res) => {
    try {
      const { name } = req.query;
      const foundName = await getCategoryByName(name);
      return successResponse(res, ok, 'the category', null, foundName);
    } catch (error) {
      return errorResponse(res, badRequest, error.message);
    }
  };
  static categoryDeletion = async (req, res) => {
    const { id } = req.params;
    try{
      await deleteCategory(id);
      return responseHandlers.successResponse(res, ok, 'category is deleted');
    }
    catch(err){
      errorResponse(res, badRequest, err.message);
    }
  };
}
