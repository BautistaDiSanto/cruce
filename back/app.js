require("./database/sequelize.js");
require("./modules/Product.js");
const ProductService = require("./modules/ProductService");
const express = require("express");
const cors = require("cors");
const { query } = require("express");
const app = express();
const port = 3001;

const productService = new ProductService();
app.use(cors());
app.options("*", cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await productService.getAllProducts(
      req.query.limits,
      req.query.page,
      req.query.orderColumn,
      req.query.direction
    );
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
    res.status(404).json(error.message);
  }
});

app.post("/product", async (req, res) => {
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
    res.status(200).json();
  } catch (error) {
    res.status(404).json(error.message);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const product = await productService.editProduct(req.body, req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log("servidor en el puerto", port);
});
