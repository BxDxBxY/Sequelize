export default function (sequelize, datatypes) {
  const Animals = sequelize.define("animal", {
    name: {
      type: datatypes.STRING,
      allowNull: false,
    },
    color: {
      type: datatypes.STRING,
      allowNull: false,
    },
    age: {
      type: datatypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });
  return Animals;
}
