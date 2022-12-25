const { Op } = require("sequelize");
const url = require("url");
const { commonErrors } = require("../utils/commonErrors");
const Items = require("./../models/Items");
const selectData = require("./../utils/selectData");
const include = require("./utils/include");

// get all items
const getItems = async (req, res) => {
  try {
    // get params from url
    const { group } = url.parse(req.url, true).query;

    const items = await Items.findAll({
      where: {
        ...(group && {
          groupId: { [Op.or]: group.split(",") },
        }),
        ...selectData.byUserId(req),
      },
      include: include.group(),
    });
    return res.send(items);
  } catch (err) {
    return commonErrors[500];
  }
};

// get item by id
const getItemById = async (req, res) => {
  try {
    const item = await Items.findOne({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
      include: include.group(),
    });
    return res.send(item);
  } catch (err) {
    return commonErrors[500];
  }
};

// add item
const addItem = async (req, res) => {
  try {
    await Items.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    return res.json({
      message: "Item Created",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// update item
const updateItem = async (req, res) => {
  try {
    await Items.update(req.body, {
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Item Success Updated",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// delete item
const deleteItem = async (req, res) => {
  try {
    await Items.destroy({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Item Success Deleted",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

module.exports = {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
};
