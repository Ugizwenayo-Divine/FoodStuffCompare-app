import picture from '../helpers/imageUpload';
import responseHandler from '../helpers/responseHandler';
import responseMessage from '../helpers/customMessages';
import statusCode from '../helpers/statusCode';
import ProductServices from '../services/productServices';

const { errorResponse, successResponse } = responseHandler;
const {
  error,
  wrongType,
  allProducts,
  productNameFound,
  products,
  deleted,
} = responseMessage;
const { 
    badRequest, 
    unSupportedMedia, 
    ok,
    created,
    unAuthorized,
} = statusCode;

class ProductController {
  static async addProduct(req, res) {
    const { sessionUser } = req;
    const { id } = sessionUser;
    try {
      if (req.files && req.files.image) {
        let image;
        if (req.files.image.type || req.files.image.length) {
          image = await picture.uploader(req.files.image);
        } else {
        return errorResponse(res, badRequest, 'Please select atleast one image');
        }

        if (!image || image.url.includes('null')) {
        errorResponse(res, unSupportedMedia, 'Please select the right type of image');
        } else null;
        const { categoryId, marketId, name, price, description} = req.body;
        const datas = await ProductServices.saveProduct({
          createdBy: id,
          categoryId,
          marketId,
          name,
          price: `${price} RWF`,
          description,
          image: image.url,
          availability:true,
          cloudinaryId: image.public_id,
        });
        return successResponse(res, created, 'Product Successfully Added', null, datas)
      }
    return errorResponse(res,unAuthorized,'Please select one or more images')
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static getAll = async (req, res) => {
    try {
      const products = await ProductServices.getAllProducts();
      const cheapProducts = await ProductServices.findCheapProduct();
      console.log('cheap', cheapProducts);
      const cheapId = cheapProducts.find(async(pro)=>{
        const product = await ProductServices.findCheapId(pro.name,pro.price);
        console.log(product.dataValues.id)
        return product.dataValues.id;
      });
      console.log(cheapId,'iddch');
      return successResponse(res, ok, allProducts, null, {data:products,cheapest:cheapProducts});
    } catch (err) {
      console.log(err);
      return errorResponse(res, badRequest, error);
    }
  };
  static getOneProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const oneProduct = await ProductServices.getProduct(id);
      return successResponse(res, ok, products, null, oneProduct);
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static searchName = async (req, res) => {
    try {
      const { name } = req.query;
      const foundName = await ProductServices.searchByName(name);
      if (foundName.length == 0) {
        return errorResponse(res, badRequest, 'Product does not exist');
      } else {
        return successResponse(res, ok, productNameFound, null, foundName);
      }
    } catch (error) {
      return errorResponse(res, badRequest, error);
    }
  };
  static searchAny = async (req, res) => {
    try {
      const { name } = req.query;
      const foundName = await ProductServices.findByNameCategoryMarket(name);
      if (foundName.length == 0) {
        return errorResponse(res, badRequest, 'Product does not exist');
      } else {
        return successResponse(res, ok, productNameFound, null, foundName);
      }
    } catch (error) {
      console.log(error,'{}{}}}')
      return errorResponse(res, badRequest, error);
    }
  };
  static searchByAny = async (req, res) => {
    let foundProduct='';
    let products = [];
    try {
      const { product,market,location } = req.query;
      foundProduct = await ProductServices.searchByName(product); 
      const allProducts = await ProductServices.getAllProducts(); 
      const cheapProducts = await ProductServices.findCheapProduct();
      if (product!=='false' && market!=='false' && location!=='false'){
        if(foundProduct.length>0){
          foundProduct.map(pro=>{
            if(pro.Market.name.toLowerCase().includes(market.toLowerCase()) && (
            pro.Market.province.toLowerCase().includes(location.toLowerCase()) ||
            pro.Market.district.toLowerCase().includes(location.toLowerCase()) ||
            pro.Market.sector.toLowerCase().includes(location.toLowerCase())
            )){
              products.push(pro);
            }            
          });
          }
        else{
          allProducts.map(pro=>{
            if(pro.Category.name.toLowerCase().includes(product.toLowerCase()) &&
              pro.Market.name.toLowerCase().includes(market.toLowerCase()) && (
              pro.Market.province.toLowerCase().includes(location.toLowerCase()) ||
              pro.Market.district.toLowerCase().includes(location.toLowerCase()) ||
              pro.Market.sector.toLowerCase().includes(location.toLowerCase())
              )){
                products.push(pro);
              } 
          })
        }
          if(products.length>0){
            return successResponse(res,ok,'The product is found', null,{data:products,cheapest:cheapProducts}); 
          }
          return errorResponse(res,badRequest,'The product hh is not available'); 
      }
      if(foundProduct.length>0){
        return successResponse(res,ok,'The product is found',null,{data:foundProduct,cheapest:cheapProducts});
      }
      allProducts.map((pro)=>{
        if(pro.Category.name.toLowerCase().includes(product.toLowerCase())){
          products.push(pro);        
        }
        if(pro.Market.name.toLowerCase().includes(market.toLowerCase())){
          products.push(pro);         
        }
        if(pro.Market.province.toLowerCase().includes(location.toLowerCase())){
          products.push(pro);         
        }
        if(pro.Market.district.toLowerCase().includes(location.toLowerCase())){
          products.push(pro);        
        }
        if(pro.Market.sector.toLowerCase().includes(location.toLowerCase())){
          console.log('sec');
          products.push(pro);      
        }
      }); 
      if(products.length>0){
        return successResponse(res,ok,'The product is found', null,{data:products,cheapest:cheapProducts}); 
      }
      return errorResponse(res,badRequest,'The product is not available'); 
    } catch (error) {
      console.log('error', error);
      return errorResponse(res, badRequest, error);
    }
  };
  static delete = async (req, res) => {
    try {
      const { id } = req.params;
      const { products } = req;
      await picture.deleteTheImage(products.cloudinaryId);
      await ProductServices.deleteProduct(id);
      return successResponse(res, ok, deleted, null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
  static productUpdation = async (req, res) => {
    let image;
    try {
      const { id } = req.params;
      let imageUrl = null,
        imageId = null;
      const { products } = req;

      if (req.files && req.files.image) {
        await picture.deleteTheImage(products.cloudinaryId);
        image = await picture.uploader(req.files.image);
        if (!image || image.url.includes('null')) {
          return errorResponse(res, unSupportedMedia, wrongType);
        }
        const { url, public_id } = image;
        imageUrl = url;
        imageId = public_id;
      }
      const newData = {
        id,
        name: req.body.name || products.name,
        price: `${req.body.price} RWF` || products.price,
        description: req.body.description || products.description,
        categoryId: req.body.categoryId || products.categoryId,
        marketId: req.body.marketId || products.marketId,
        image: imageUrl || products.image,
        availability: req.body.availability || products.availability,
        cloudinaryId: imageId || products.cloudinaryId,
      };
      await ProductServices.updateProduct(newData);
      return successResponse(res, ok, 'updated', null, null);
    } catch (err) {
      return errorResponse(res, badRequest, error);
    }
  };
}
export default ProductController;
