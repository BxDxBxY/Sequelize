import { Sequelize, Model, STRING, INTEGER, DataTypes } from "sequelize";

import Animals from "../Models/animalsModel.js";
import Users from "../Models/usersModel.js";

const sequelize = new Sequelize("postgres://postgres:99@localhost:5432/nest", {
  logging: false,
});


try {
  await Users(sequelize, DataTypes).hasOne(await Animals(sequelize, DataTypes));
  await sequelize.authenticate();
  console.log("Connection established");
} catch (er) {
  console.log(er.message);
}
await Animals(sequelize, DataTypes).sync({ alter: true });
await Users(sequelize, DataTypes).sync({ alter: true });

export default sequelize;
