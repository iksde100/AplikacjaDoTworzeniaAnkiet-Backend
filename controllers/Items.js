const { Op } = require("sequelize");
const url = require("url");
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
    res.send(items);
  } catch (err) {
    console.log(err);
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
    res.send(item);
  } catch (err) {
    console.log(err);
  }
};

// add item
const addItem = async (req, res) => {
  try {
    await Items.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    res.json({
      message: "Item Created",
    });
  } catch (err) {
    console.log(err);
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
    res.json({
      message: "Item Success Updated",
    });
  } catch (err) {
    console.log(err);
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
    res.json({
      message: "Item Success Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
};
