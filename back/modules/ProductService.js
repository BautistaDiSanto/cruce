const Product = require("./Product");

const validateProduct = (body) => {
  if (!body.image) throw new Error("nombre property missing");
  if (!body.name) throw new Error("nombre property missing");
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
      if (!productFounded) throw new Error("not found papurri");
      return productFounded;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getAllProducts() {
    try {
      const allProducts = await Product.findAll();
      return allProducts;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteProduct(id) {
    try {
      const product = await Product.findByPk(id);
      product.destroy();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async editProduct(body) {
    try {
      validateProduct(body);
      const product = await Product.findByPk(id);
      product.name = body.name;
      product.price = body.price;
      product.image = body.image;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ProductService;
