const Reservations = require("../models/Reservations");
const selectData = require("./../utils/selectData");
const include = require("./utils/include");

// get all reservations
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservations.findAll({
      where: {
        ...selectData.byUserId(req),
      },
      include: [include.item(), include.group()],
    });
    res.send(reservations);
  } catch (err) {
    console.log(err);
  }
};

// get reservation by id
const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservations.findOne({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
      include: [include.item(), include.group()],
    });
    res.send(reservation);
  } catch (err) {
    console.log(err);
  }
};

// add reservation
const addReservation = async (req, res) => {
  try {
    await Reservations.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    res.json({
      message: "Reservation Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// update reservation
const updateReservation = async (req, res) => {
  try {
    await Reservations.update(req.body, {
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    res.json({
      message: "Reservation Success Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// delete reservation
const deleteReservation = async (req, res) => {
  try {
    await Reservations.destroy({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    res.json({
      message: "Reservation Success Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getReservations,
  getReservationById,
  addReservation,
  updateReservation,
  deleteReservation,
};
