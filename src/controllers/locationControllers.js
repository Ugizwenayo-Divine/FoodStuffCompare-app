import _ from 'lodash';
import LocationService from '../services/locationServices';
import responseHandlers from '../helpers/responseHandler';
import statusCodes from '../helpers/statusCode';
// import customMessages from '../helpers/customMessages';

const { successResponse, errorResponse } = responseHandlers;
const {
  getAllDistricts,
  getAllProvinces,
  getAllSectors,
  getDistrictSectorS,
  getProvinceDistricts
} = LocationService;
const {
  badRequest,
  ok,
} = statusCodes;

export default class LocationController {

  static getProvinces = async (req, res) => {
    try {
      const locations = await getAllProvinces();
      return successResponse(res, ok, 'All locations', null, locations);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getDistricts = async (req, res) => {
    try {
      const locations = await getAllDistricts();
      return successResponse(res, ok, 'All locations', null, locations);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getSectors = async (req, res) => {
    try {
      const locations = await getAllSectors();
      return successResponse(res, ok, 'All locations', null, locations);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static getDistrictsByProvince = async (req, res) => {
    const {id} = req.params;
    try {
      const locations = await getProvinceDistricts(id);
      return successResponse(res, ok, 'All locations', null, locations);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  
  static getSectorsByDistrict = async (req, res) => {
    const {id} = req.params;
    try {
      const locations = await getDistrictSectorS(id);
      return successResponse(res, ok, 'All locations', null, locations);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
}
