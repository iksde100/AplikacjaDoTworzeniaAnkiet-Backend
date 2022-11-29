const { Op } = require("sequelize");
const url = require("url");
const Groups = require("./../models/Groups");
const Items = require("./../models/Items");
const selectData = require("./../utils/selectData");

// Groups dictionary
const groups = async (req, res) => {
  try {
    const groups = await Groups.findAll({
      where: {
        ...selectData.byUserId(req),
      },
      attributes: ["id", "name"],
    });
    res.send(groups);
  } catch (err) {
    console.log(err);
  }
};

// Items dictionary
const items = async (req, res) => {
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
      attributes: ["id", "name"],
    });
    res.send(items);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  groups,
  items,
};
