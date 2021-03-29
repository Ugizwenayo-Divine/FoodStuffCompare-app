import { validateLocation, displayErrorMessages } from '../helpers/validations';


const locationValidation = async (req, res, next) => {
  const { error } = validateLocation(req.body);
  displayErrorMessages(error, res, next);
};


export default { locationValidation};
