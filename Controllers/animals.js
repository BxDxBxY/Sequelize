import sequelize from "../utils/sequelize.js";

const Animals = sequelize.model("animal");

export const GETALL = async (req, res) => {
  try {
    const animals = await Animals.findAll({ raw: true });
    return res.send(animals);
  } catch (er) {
    return res.send(er.message);
  }
};
export const GETONE = async (req, res) => {
  try {
    const id = req.params.id;
    const animal = await Animals.findOne({ where: { id } });
    return res.send(animal);
  } catch (er) {
    return res.send(er.message);
  }
};
export const POST = async (req, res) => {
  try {
    const { name, color, age } = req.body;
    let newAnimal = {
      name,
      color,
      age,
    };
    const animal = await Animals.create(newAnimal);
    return res.send(animal);
  } catch (er) {
    return res.send(er.message);
  }
};

export const PUT = async (req, res) => {
  try {
    const id = req.params.id;
    await Animals.update(req.body, { where: { id } });
    return res.send("Successfully updated!");
  } catch (er) {
    return res.send(er.message);
  }
};
export const DELETE = async (req, res) => {
  try {
    const id = req.params.id;
    await Animals.destroy({ where: { id } });
    return res.send("Successfully deleted!");
  } catch (er) {
    return res.send(er.message);
  }
};
