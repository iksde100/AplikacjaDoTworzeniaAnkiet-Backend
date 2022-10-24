const express = require("express");

const cars = require("./../controllers/Cars");
const auth = require("./../controllers/Auth");
const verify = require("./verifyToken");

const router = express.Router();

router.get("/cars", verify, cars.getCars);
router.get("/cars/:id", verify, cars.getCarById);
router.post("/cars/add", verify, cars.addCar);
router.put("/cars/update/:id", verify, cars.updateCar);
router.delete("/cars/delete/:id", verify, cars.deleteCar);

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);

module.exports = router;
