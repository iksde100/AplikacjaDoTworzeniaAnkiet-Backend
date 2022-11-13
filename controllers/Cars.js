const Cars = require("./../models/Cars");

// get all cars
const getCars = async (req, res) => {
  try {
    const cars = await Cars.findAll({
      where: { idUser: req.user.id },
    });
    res.send(cars);
  } catch (err) {
    console.log(err);
  }
};

// get car by id
const getCarById = async (req, res) => {
  try {
    const car = await Cars.findAll({
      where: {
        id: req.params.id,
        idUser: req.user.id,
      },
    });
    res.send(car[0]);
  } catch (err) {
    console.log(err);
  }
};

// add car
const addCar = async (req, res) => {
  try {
    await Cars.create({
      ...req.body,
      idUser: req.user.id,
    });
    res.json({
      message: "Car Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// update car
const updateCar = async (req, res) => {
  try {
    await Cars.update(req.body, {
      where: {
        id: req.params.id,
        idUser: req.user.id,
      },
    });
    res.json({
      message: "Car Success Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// delete car
const deleteCar = async (req, res) => {
  try {
    await Cars.destroy({
      where: {
        id: req.params.id,
        idUser: req.user.id,
      },
    });
    res.json({
      message: "Car Success Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
};
