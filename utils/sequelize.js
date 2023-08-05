import { Sequelize, Model, STRING, INTEGER } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:99@localhost:5432/nest", {
  logging: false,
});

const Animals = sequelize.define("animal", {
  name: {
    type: STRING,
    allowNull: false,
  },
  color: {
    type: STRING,
    allowNull: false,
  },
  age: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

const Users = sequelize.define("users", {
  name: {
    type: STRING,
    allowNull: false,
  },
  age: {
    type: INTEGER,
    allowNull: false,
  },
  animal: {
    type: INTEGER,
    // references:,
  },
});

try {
  await sequelize.authenticate();
  console.log("Connection established");
} catch (er) {
  console.log(er.message);
}
await Animals.sync({ force: true });
await Users.sync({ force: true });

export default sequelize;
