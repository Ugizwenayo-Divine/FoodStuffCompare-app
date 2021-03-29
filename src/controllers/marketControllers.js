import _ from 'lodash';
import MarketService from '../services/marketServices';
import responseHandlers from '../helpers/responseHandler';
import statusCodes from '../helpers/statusCode';
// import customMessages from '../helpers/customMessages';

const { successResponse, errorResponse } = responseHandlers;
const {
    createMarket,
    deleteMarket,
    getAllMarket,
    getMarket,
    getMarketByName,
    updateMarket,
} = MarketService;
const {
  conflict,
  badRequest,
  created,
  ok,
} = statusCodes;

export default class MarketController {

  static async saveMarket(req, res) {
    try{
      const savedMarket = await createMarket(req.body);
      return successResponse(res, created, 'Market created', null, savedMarket);
    }
    catch(err){
      errorResponse(res, badRequest, 'The Market already exists');
    } 
  }
  static getAll = async (req, res) => {
    try {
      const markets = await getAllMarket();
      return successResponse(res, ok, 'All Markets', null, markets);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getOneMarket = async (req, res) => {
    try {
      const { id } = req.params;
      const getOneMarket = await getMarket(id);
      return successResponse(res, ok, 'the Market', null, getOneMarket);
    } catch (error) {
      return errorResponse(res, badRequest, error.message);
    }
  };
  static marketDeletion = async (req, res) => {
    const { id } = req.params;
    try{
      await deleteMarket(id);
      return responseHandlers.successResponse(res, ok, 'Market is deleted');
    }
    catch(err){
      errorResponse(res, badRequest, err.message);
    }
  };
  static getOneByMarket = async (req, res) => {
    try {
      const { name } = req.query;
      const getOneMarket = await getMarketByName(name);
      if(getOneMarket.length>0){
        return successResponse(res, ok, 'The Market', null, getOneMarket);
      }
      return errorResponse(res, badRequest, 'The market does not exist');
    } catch (error) {
      return errorResponse(res, badRequest, error.message);
    }
  };
  static marketUpdation = async (req, res) => {
    try {
      const { id } = req.params;
      const { market } = req;
      console.log(market);
      const newData = {
        id,
        name: req.body.name || market.name,
        code: req.body.code || market.code,
        province: req.body.province || market.province,
        district: req.body.district || market.district,
        sector: req.body.sector || market.sector,
      };
      console.log('new',newData)
      await updateMarket(newData);
      return successResponse(res, ok, 'updated', null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
}
