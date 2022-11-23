const express = require("express");

const reservations = require("./../controllers/Reservations");
const groups = require("./../controllers/Groups");
const items = require("./../controllers/Items");
const users = require("./../controllers/Users");
const auth = require("./../controllers/Auth");
const verify = require("./verifyToken");

const router = express.Router();

router.get("/reservations", verify, reservations.getReservations);
router.get("/reservations/:id", verify, reservations.getReservationById);
router.post("/reservations/add", verify, reservations.addReservation);
router.put("/reservations/update/:id", verify, reservations.updateReservation);
router.delete("/reservations/delete/:id", verify, reservations.deleteReservation);

router.get("/groups", verify, groups.getGroups);
router.get("/groups/:id", verify, groups.getGroupById);
router.post("/groups/add", verify, groups.addGroup);
router.put("/groups/update/:id", verify, groups.updateGroup);
router.delete("/groups/delete/:id", verify, groups.deleteGroup);

router.get("/items", verify, items.getItems);
router.get("/items/:id", verify, items.getItemById);
router.post("/items/add", verify, items.addItem);
router.put("/items/update/:id", verify, items.updateItem);
router.delete("/items/delete/:id", verify, items.deleteItem);

router.get("/user", verify, users.getCurrentUser);

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);

module.exports = router;
