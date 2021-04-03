const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database/sequelize.js");

class Product extends Model {
  setImage(image) {
    this.image = image;
  }
  setName(name) {
    this.name = name;
  }
  setPrice(price) {
    this.price = price;
  }
  getImage() {
    return this.image;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

Product.sync();

module.exports = Product;
