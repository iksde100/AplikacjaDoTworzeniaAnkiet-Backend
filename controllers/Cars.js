const Cars = require("./../models/Cars");

// get all cars
const getCars = async (req, res) => {
  try {
    const cars = await Cars.findAll();
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
    await Cars.create(req.body);
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
      },
    });
    res.json({
      message: "Car Success Update",
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
      },
    });
    res.json({
      message: "Car Success Delete",
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
