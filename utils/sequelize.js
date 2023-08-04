import { Sequelize } from "sequelize";

const sql = new Sequelize("postgres://postgres:99@localhost:5432/nest", {
  logging: false,
});

try {
  await sql.authenticate();
  console.log("Connection established");
} catch (er) {
  console.log(er.message);
}

export default sql;
