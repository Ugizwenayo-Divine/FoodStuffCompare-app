import LocationServices from '../services/locationServices';
import responseHandler from '../helpers/responseHandler';
// import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';

const { 
    getLocation,
} = LocationServices;
const { 
    errorResponse 
} = responseHandler;
const { 
    badRequest 
} = statusCode;

const doesLocationExist = async (req, res, next) => {
  let location;
  if (req.params.id) {
    const { id } = req.params;
    location = await getLocation(id);
  }
  if (location) {
    req.location = location.dataValues;
    return next();
  }
  return errorResponse(res, badRequest, 'The location does not exist');
};

export default { doesLocationExist };
