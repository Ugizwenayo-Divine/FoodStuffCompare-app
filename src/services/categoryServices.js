import models from '../models';

const { Category } = models;

class CategoryServices {
  static createCategory = async (data) => {
    const {dataValues} = await Category.create({
      name: data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'name',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllCategory = async () => {
    const allCategory = await Category.findAll();
    return allCategory;
  }
  static getCategory = async (id) => {
    const allCategory = await Category.findOne({ where: { id } });
    return allCategory;
  }
  static getCategoryByName = async (name) => {
    const allCategory = await Category.findAll({ where: { name } });
    return allCategory;
  }
  static deleteCategory = async (id) => {
    const deletedCategory = await Category.destroy(
      { where: { id: id } }
    );
    return deletedCategory;
  }
}

export default CategoryServices;