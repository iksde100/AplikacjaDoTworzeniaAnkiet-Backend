const express = require("express");
const cars = require("./../controllers/Cars");

const router = express.Router();

router.get("/cars", cars.getCars);
router.get("/cars/:id", cars.getCarById);
router.post("/cars/add", cars.addCar);
router.put("/cars/update/:id", cars.updateCar);
router.delete("/cars/delete/:id", cars.deleteCar);

module.exports = router;
