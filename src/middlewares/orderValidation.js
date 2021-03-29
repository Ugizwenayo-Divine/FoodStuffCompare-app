import { validateOrder, displayErrorMessages } from '../helpers/validations';

const orderValidation = async (req, res, next) => {
  const { error } = validateOrder(req.body);
  displayErrorMessages(error, res, next);
};

export default { orderValidation };
