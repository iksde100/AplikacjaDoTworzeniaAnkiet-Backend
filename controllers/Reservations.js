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

    // parse params to Date
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const reservations = await Reservations.findAll({
      where: {
        ...(from &&
          to && {
            [Op.or]: {
              dateStart: {
                [Op.and]: {
                  [Op.gte]: fromDate,
                  [Op.lte]: toDate,
                },
              },
              dateFinish: {
                [Op.and]: {
                  [Op.gte]: fromDate,
                  [Op.lte]: toDate,
                },
              },
            },
          }),
        ...selectData.byUserId(req),
      },
      include: [include.item(), include.group()],
    });

    return res.send(reservations);
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

    return res.send(reservation);
  } catch (err) {
    console.log(err);
  }
};

// add reservation
const addReservation = async (req, res) => {
  try {
    const from = req.body.dateStart;
    const to = req.body.dateFinish;

    // parse params to Date
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const overlappingReservations = await Reservations.findAll({
      where: {
        itemId: req.body.itemId,
        [Op.or]: [
          {
            dateStart: {
              [Op.and]: {
                [Op.gt]: fromDate,
                [Op.lt]: toDate,
              },
            },
          },
          {
            dateFinish: {
              [Op.and]: {
                [Op.gt]: fromDate,
                [Op.lt]: toDate,
              },
            },
          },
          {
            dateStart: {
              [Op.lte]: fromDate,
            },
            dateFinish: {
              [Op.gt]: fromDate,
            },
          },
          {
            dateStart: {
              [Op.lte]: fromDate,
            },
            dateFinish: {
              [Op.gt]: toDate,
            },
          },
        ],
      },
    });

    if (overlappingReservations.length > 0) {
      return res.status(409).send({
        message: "Data rezerwacji koliduje z innymi rezerwacjami",
        conflicts: overlappingReservations,
      });
    }

    await Reservations.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    return res.json({
      message: "Reservation Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// update reservation
const updateReservation = async (req, res) => {
  try {
    const from = req.body.dateStart;
    const to = req.body.dateFinish;

    // parse params to Date
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const overlappingReservations = await Reservations.findAll({
      where: {
        id: {
          [Op.ne]: req.params.id,
        },
        itemId: req.body.itemId,
        [Op.or]: [
          {
            dateStart: {
              [Op.and]: {
                [Op.gt]: fromDate,
                [Op.lt]: toDate,
              },
            },
          },
          {
            dateFinish: {
              [Op.and]: {
                [Op.gt]: fromDate,
                [Op.lt]: toDate,
              },
            },
          },
          {
            dateStart: {
              [Op.lte]: fromDate,
            },
            dateFinish: {
              [Op.gt]: fromDate,
            },
          },
          {
            dateStart: {
              [Op.lte]: fromDate,
            },
            dateFinish: {
              [Op.gt]: toDate,
            },
          },
        ],
      },
    });

    if (overlappingReservations.length > 0) {
      return res.status(409).send({
        message: "Data rezerwacji koliduje z innymi rezerwacjami",
        conflicts: overlappingReservations,
      });
    }

    await Reservations.update(req.body, {
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });

    return res.json({
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

    return res.json({
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
