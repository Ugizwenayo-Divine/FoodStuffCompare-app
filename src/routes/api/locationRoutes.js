import express from 'express';
import LocationController from '../../controllers/locationControllers';
import locationMiddlewares from '../../middlewares/locationChecker';
import LocationValidation from '../../middlewares/locationValidaton';
import userAuthentication from '../../middlewares/authMiddlewares';

const {
    getDistricts,
    getDistrictsByProvince,
    getProvinces,
    getSectors,
    getSectorsByDistrict
} = LocationController;
const locationRouter = express.Router();

locationRouter.get('/province', getProvinces);
locationRouter.get('/district', getDistricts);
locationRouter.get('/sector', getSectors);
locationRouter.get('/district/:id', getDistrictsByProvince);
locationRouter.get('/sector/:id', getSectorsByDistrict);

export default locationRouter;
