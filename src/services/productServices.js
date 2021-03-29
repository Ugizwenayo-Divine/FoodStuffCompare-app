import Sequelize from 'sequelize';
import models from '../models';

const { Product,Market, Category } = models;
const Op = Sequelize.Op;

class ProductServices {
  static async saveProduct(product) {
    const createdProduct = await Product.create(
      {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fields: [
            'createdBy',
            'categoryId',
            'marketId',
            'name',
            'price',
            'description',
            'image',
            'availability',
            'cloudinaryId',
            'createdAt',
            'updatedAt'],
      }
    );

    return createdProduct;
  }
  static getAllProducts = async () => {
    const allProducts = await Product.findAll({include: [{model:Category}, {model:Market}],order: [['price','ASC'],['name','ASC']] });
    return allProducts;
  };
  static getProduct = async (id) => {
    const allProducts = await Product.findOne({ where: { id: id } });
    return allProducts;
  };
  static deleteProduct = async (id) => {
    const deletedProduct = await Product.destroy({ where: { id: id } });
    return deletedProduct;
  };
  static updateProduct = async (newData) => {
    const updatedProduct = await Product.update(
      {
        price: newData.price,
        description: newData.description,
        categoryId: newData.categoryId,
        marketId:newData.marketId,
        image: newData.image,
        availability: newData.availability,
      },
      { where: { id: newData.id } }
    );
    return updatedProduct;
  };
  static async productExists(attr, val) {
    const product = await Product.findOne({ where: { [attr]: val } });
    return product;
  };
  static searchByName = async (name) => {
    const allProducts = await Product.findAll({ where: { name: {[Op.iLike]:`%${name}%`} },include: [{model:Category}, {model:Market}] });
    return allProducts;
  };
  static searchByPrice = async (price) => {
    const allProducts = await Product.findAll({ where: { price: {[Op.iLike]:`%${price}%`} },include: [{model:Category}, {model:Market}] });
    return allProducts;
  };
  static findByNameCategoryMarket = async (value) => {
    let product = await Product.findAll({
      where: { 
        [Op.or]:[{name: {[Op.iLike]:`%${value}%`} },{categoryId:parseInt(value)},{marketId:parseInt(value)}],
      }
    });
    return product;
  };
  static findCheapProduct = async()=>{
    let product= Product.findAll({
      attributes: ['name',[Sequelize.fn('min', Sequelize.col('price')),'price']],
      group: ["name"],
      raw: true,
    });
    return product;
  }
  static findCheapId = async (name,price) => {
    const allProducts = await Product.findOne({ where: { name: name, price:price } });
    return allProducts;
  };
}

export default ProductServices;
