const Product = require("./Product");
const sequelize = require("../database/sequelize");

const queryBuilder = (rawQuery, params) => {
  const newObj = {};
  params.map((p) => {
    if (rawQuery[p]) newObj[p] = rawQuery[p];
    return 0; // justo for the linter :P
  });
  return newObj;
};

const validateProduct = (body) => {
  if (!body.image) throw new Error("image property missing");
  if (!body.name) throw new Error("name property missing");
  if (!body.price) throw new Error("price property missing");
};

class ProductService {
  async createProduct(body) {
    try {
      validateProduct(body);
      const newProduct = await Product.create({
        name: body.name,
        price: body.price,
        image: body.image,
      });
      return newProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getProductById(id) {
    try {
      const productFounded = await Product.findByPk(id);
      if (!productFounded) throw new Error("product not found");
      return productFounded;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getAllProducts(limits, page, orderColumn, direction) {
    let order = orderColumn && [[orderColumn, direction]];
    if (direction !== "ASC" && direction !== "DESC" && direction !== "") {
      throw new Error(400, "bad request");
    }
    if (!orderColumn || !direction) {
      order = null;
    }
    try {
      const { count, rows } = await Product.findAndCountAll({
        offset: (parseInt(page) - 1) * limits,
        limit: parseInt(limits),
        order,
      });
      const pages = Math.ceil(count / limits);
      return { pages, rows };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteProduct(id) {
    try {
      const product = await Product.findByPk(id);
      product.destroy();
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async editProduct(body, id) {
    try {
      validateProduct(body);
      const product = await Product.findByPk(id);
      product.image = body.image;
      product.name = body.name;
      product.price = body.price;
      await product.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ProductService;
