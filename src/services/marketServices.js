import models from '../models';

const { Market } = models;

class MarketServices {
  static createMarket = async (data) => {
    const {dataValues} = await Market.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      fields:[
        'name',
        'code',
        'province',
        'district',
        'sector',
        'createdAt',
        'updatedAt'
      ]
    });
    return dataValues;
  }
  static getAllMarket = async () => {
    const allMarket = await Market.findAll();
    return allMarket;
  }
  static getMarket = async (id) => {
    const allMarket = await Market.findOne({ where: { id } });
    return allMarket;
  }
  static getMarketByName = async (name) => {
    const allMarket = await Market.findAll({ where: { name } });
    return allMarket;
  }
  static deleteMarket = async (id) => {
    const deletedMarket = await Market.destroy(
      { where: { id: id } }
    );
    return deletedMarket;
  }
  static updateMarket = async (newData) => {
    const updatedMarket = await Market.update(
      {
        name: newData.name,
        code: newData.code,
        province: newData.province,
        district: newData.district,
        sector: newData.sector,
      },
      { where: { id: newData.id } }
    );
    return updatedMarket;
  };
}

export default MarketServices;