const { Op } = require("sequelize");
const url = require("url");
const Reservations = require("../models/Reservations");
const selectData = require("./../utils/selectData");
const include = require("./utils/include");

// https://stackoverflow.com/questions/43115151/sequelize-query-to-find-all-records-that-falls-in-between-date-range
// https://www.tabnine.com/code/javascript/functions/sequelize/between

// get all reservations
const getReservations = async (req, res) => {
  try {
    // get params from url
    const { from, to } = url.parse(req.url, true).query;

    const reservations = await Reservations.findAll({
      where: {
        ...(from &&
          to && {
            [Op.or]: {
              dateStart: {
                [Op.and]: {
                  [Op.gte]: from,
                  [Op.lte]: to,
                },
              },
              dateFinish: {
                [Op.and]: {
                  [Op.gte]: from,
                  [Op.lte]: to,
                },
              },
            },
          }),
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
