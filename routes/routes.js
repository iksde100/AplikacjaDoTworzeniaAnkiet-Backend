const express = require("express");

// const cars = require("./../controllers/Cars");
const groups = require("./../controllers/Groups");
const users = require("./../controllers/Users");
const auth = require("./../controllers/Auth");
const verify = require("./verifyToken");

const router = express.Router();

// router.get("/cars", verify, cars.getCars);
// router.get("/cars/:id", verify, cars.getCarById);
// router.post("/cars/add", verify, cars.addCar);
// router.put("/cars/update/:id", verify, cars.updateCar);
// router.delete("/cars/delete/:id", verify, cars.deleteCar);

router.get("/groups", verify, groups.getGroups);
router.get("/groups/:id", verify, groups.getGroupById);
router.post("/groups/add", verify, groups.addGroup);
router.put("/groups/update/:id", verify, groups.updateGroup);
router.delete("/groups/delete/:id", verify, groups.deleteGroup);

router.get("/user", verify, users.getCurrentUser);

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);

module.exports = router;
