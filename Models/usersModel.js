export default function (sequelize, dataTypes) {
  const Users = sequelize.define("user", {
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    age:{
        type: dataTypes.INTEGER,
        allowNull: false,
    }
  });
  return Users;
}
