import {
    validateProducts,
    validateSearchName,
    displayErrorMessages,
  } from '../helpers/validations';
  
  const createProductValidation = async (req, res, next) => {
    const { error } = validateProducts(req.body);
    displayErrorMessages(error, res, next);
  };
  const searchProductName = async (req, res, next) => {
    const {name} = req.query;
    const data={
      name,
    }
    const { error } = validateSearchName(data);
    displayErrorMessages(error, res, next);
  };
//   const searchProductCategory = async (req, res, next) => {
//     const {category} = req.query;
//     const data={
//       category,
//     }
//     const { error } = validateSearchCategory(data);
//     displayErrorMessages(error, res, next);
//   };
  const updateProductValidation = async (req, res, next) => {
    const { products } = req;
    console.log(products);
    let keys = Object.keys(req.body);
    let name = keys.find((key) => key == 'name');
    let price = keys.find((key) => key == 'price');
    let description = keys.find((key) => key == 'description');
    let categoryId = keys.find((key) => key == 'categoryId');
    let marketId = keys.find((key) => key == 'marketId');
    let availability = keys.find((key) => key == 'availability');
    let newPrice = products.price.split(' ');
    const data = {
      name: name ? req.body.name : products.name,
      price: price ? req.body.price :( newPrice[0]).toString(),
      description: description ? req.body.description : products.description,
      categoryId: categoryId ? req.body.categoryId : products.categoryId,
      marketId: marketId ? req.body.marketId : products.marketId,
      availability: availability ? req.body.availability : (products.availability),
    };
    const { error } = validateProducts(data);
    displayErrorMessages(error, res, next);
  };
//   const searchAnyProduct = async (req, res, next) => {
//     const {search} = req.query;
//     const data={
//       search,
//     }
//     const { error } = validateAnySearch(data);
//     displayErrorMessages(error, res, next);
//   };
  
  export default {
    createProductValidation,
    updateProductValidation,
    searchProductName,
  };
  