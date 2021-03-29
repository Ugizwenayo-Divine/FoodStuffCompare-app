import { validateMarket, displayErrorMessages } from '../helpers/validations';


const marketValidation = async (req, res, next) => {
  const { error } = validateMarket(req.body);
  displayErrorMessages(error, res, next);
};
const updateMarketValidation = async (req, res, next) => {
  const { market } = req;
  let keys = Object.keys(req.body);
  let name = keys.find((key) => key == 'name');
  let code = keys.find((key) => key == 'code');
  let province = keys.find((key) => key == 'province');
  let district = keys.find((key) => key == 'district');
  let sector = keys.find((key) => key == 'sector');
  const data = {
    name: name ? req.body.name : market.name,
    code: code ? req.body.code : market.code,
    province: province ? req.body.province : market.province,
    district: district ? req.body.district : market.district,
    sector: sector ? req.body.sector : market.sector,
  };
  const { error } = validateMarket(data);
  displayErrorMessages(error, res, next);
};

export default { marketValidation, updateMarketValidation};
