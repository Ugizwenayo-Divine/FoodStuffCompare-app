import MarketServices from '../services/marketServices';
import responseHandler from '../helpers/responseHandler';
// import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';

const { 
    getMarket,
} = MarketServices;
const { 
    errorResponse 
} = responseHandler;
const { 
    badRequest 
} = statusCode;

const doesMarketExist = async (req, res, next) => {
  let market;
  if (req.params.id) {
    const { id } = req.params;
    market = await getMarket(id);
  }
  if (market) {
    req.market = market.dataValues;
    return next();
  }
  return errorResponse(res, badRequest, 'The market does not exist');
};

export default { doesMarketExist };
