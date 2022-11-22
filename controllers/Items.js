const { Op } = require("sequelize");
const Items = require("./../models/Items");
const url = require("url");
const Groups = require("../models/Groups");

// https://sebhastian.com/sequelize-join/
// https://sequelize.org/docs/v6/other-topics/scopes/#merging-includes
// https://sequelize.org/docs/v6/core-concepts/assocs/

// common utils
const includeGroup = () => ({
  model: Groups,
  attributes: {
    exclude: ["id", "userId"],
  },
});

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
        userId: req.user.id,
      },
      include: includeGroup(),
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
        userId: req.user.id,
      },
      include: includeGroup(),
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
      userId: req.user.id,
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
        userId: req.user.id,
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
        userId: req.user.id,
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
