import Joi from '@hapi/joi';
import _ from 'lodash';
import responseHandlers from './responseHandler';
import statusCodes from './statusCode';
import customMessages from './customMessages';

const {
  invalidPhoneNumber,
  invalidEmail,
  invalidFirstname,
  invalidGender,
  invalidLastname,
  invalidPassword,
  invalidType,
  invalidCategory,
  invalidPrice,
  invalidName,
} = customMessages;

const { errorResponse } = responseHandlers;
const { badRequest } = statusCodes;

const validationMethods = (pattern, messages) => {
  const methods = Joi.string().regex(pattern).trim().required().messages(messages);
  return methods;
};
const displayErrorMessages = (error, res, next) => {
  if (error) {
    const { details } = error;
    const messages = details.map((err) => err.message.replace(/['"]/g, '')).join(', ');
    return errorResponse(res, badRequest, messages);
  }
  return next();
};
const validateSignup = (user) => {
  const schema = Joi.object({
    firstName: validationMethods(/^([a-zA-Z]{3,})+$/, {
      'string.pattern.base': `${invalidFirstname}`,
    }),
    lastName: validationMethods(/^([a-zA-Z]{3,})+$/, {
      'string.pattern.base': `${invalidLastname}`,
    }),
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': `${invalidEmail}`,
    }),
    password: validationMethods(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{8,}$/,
      { 'string.pattern.base': `${invalidPassword}` }
    ),
    gender: validationMethods(/^Male$|^male$|^Female$|^female$/, {
      'string.pattern.base': `${invalidGender}`,
    }),
    phoneNumber: validationMethods(/^(078)([0-9]{7})$/, {
      'string.pattern.base': `${invalidPhoneNumber}`,
    }),
  });
  return schema.validate(user, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateLogin = (user) => {
  const schema = Joi.object({
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': `${invalidEmail}`,
    }),
    password: validationMethods(/^/, { 'string.pattern.base': `${invalidPassword}` }),
  });
  return schema.validate(user, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateRole = (data) => {
  const schema = Joi.object({
    type: validationMethods(/^client$|^Client$|^enumerator$|^Enumerator$/, {
      'string.pattern.base': `${invalidType}`,
    }),
    email: validationMethods(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      'string.pattern.base': `${invalidEmail}`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateProducts = (data) => {
  const schema = Joi.object({
    name: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidName}`,
    }),
    price: validationMethods(/^\d+(?:[.,]\d+)*$/, {
      'string.pattern.base': `${invalidPrice}`,
    })
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateSearchName = (data) => {
  const schema = Joi.object({
    name: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `${invalidName}`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateOrder = (data) => {
  const schema = Joi.object({
    quantity: validationMethods(/^\d+$/, {
      'string.pattern.base': `${invalidQuantity}`,
    }),
    payment_options: validationMethods(/^card$|^momo$/, {
      'string.pattern.base': `${orderOption}`,
    })
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateCategory = (data) => {
  const schema = Joi.object({
    name: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{3,})+$/, {
      'string.pattern.base': `the category name must not be empty or less than 3 `,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateLocation = (data) => {
  const schema = Joi.object({
    province: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `province must contain characters`,}),
    district: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `district must contain characters`,}),
    sector: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `sector must contain characters`,
    }),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
const validateMarket = (data) => {
  const schema = Joi.object({
    name: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `name must contain characters`,}),
    code: validationMethods(/^([a-zA-Z0-9_ ",;.:'!@#$%^&*?-]{1,})+$/, {
      'string.pattern.base': `code must contain characters and numbers`,}),
  });
  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });
};
export {
  validateRole, 
  validateLogin, 
  validateSignup, 
  displayErrorMessages,
  validateProducts,
  validateSearchName,
  validateCategory,
  validateLocation,
  validateMarket,
  validateOrder,
}