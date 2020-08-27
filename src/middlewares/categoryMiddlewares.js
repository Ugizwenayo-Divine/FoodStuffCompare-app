import { validateCategory, displayErrorMessages } from '../helpers/validations';


const categoryValidation = async (req, res, next) => {
  const { error } = validateCategory(req.body);
  displayErrorMessages(error, res, next);
};


export default { categoryValidation};
