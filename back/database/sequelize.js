const Sequelize = require("sequelize");

var sequelize = new Sequelize("Cruce", "bautista", "123456", {
  host: "localhost",
  dialect: "mariadb",
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
sequelize.sync();
connect();

module.exports = sequelize;
