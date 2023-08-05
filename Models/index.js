import dbConfig from "../Configs/postgres.config.js";

import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:99@localhost:5432/nest", {
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((er) => console.log("Errrorr: " + er.message));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.animals = require("./animalsModel.js")(sequelize, DataTypes);
db.books = require("./booksModel.js")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("Re-sync completed"));

export default db;
