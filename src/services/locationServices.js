import models from '../models';

const { Province, District, Sector } = models;

class LocationServices {
  
  static getAllProvinces = async () => {
    const allLocation = await Province.findAll();
    return allLocation;
  }
  static getProvince = async (id) => {
    const allLocation = await Province.findOne({ where: { id } });
    return allLocation;
  }
  
  static getAllDistricts = async () => {
    const allLocation = await District.findAll();
    return allLocation;
  }
  static getDistrict = async (id) => {
    const allLocation = await District.findOne({ where: { id } });
    return allLocation;
  }
  static getProvinceDistricts = async (id) => {
    const allLocation = await District.findAll({ where: { provinceId:id } });
    return allLocation;
  }
  
  static getAllSectors = async () => {
    const allLocation = await Sector.findAll();
    return allLocation;
  }
  static getSector = async (id) => {
    const allLocation = await Sector.findOne({ where: { id } });
    return allLocation;
  }
  static getDistrictSectorS = async (id) => {
    const allLocation = await Sector.findAll({ where: { districtId:id } });
    return allLocation;
  }
}

export default LocationServices;