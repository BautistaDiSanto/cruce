require("./database/sequelize.js");
require("./modules/Product.js");
const ProductService = require("./modules/ProductService");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const productService = new ProductService();
app.use(express.json());
app.use(cors());

app.get("/products", async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    console.log("hola");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log("servidor a su servicio en el puerto", port);
});
