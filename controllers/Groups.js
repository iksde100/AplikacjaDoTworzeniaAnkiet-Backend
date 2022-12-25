const { commonErrors } = require("../utils/commonErrors");
const Groups = require("./../models/Groups");
const selectData = require("./../utils/selectData");

// get all groups
const getGroups = async (req, res) => {
  try {
    const groups = await Groups.findAll({
      where: {
        ...selectData.byUserId(req),
      },
    });
    return res.send(groups);
  } catch (err) {
    return commonErrors[500];
  }
};

// get group by id
const getGroupById = async (req, res) => {
  try {
    const group = await Groups.findOne({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.send(group);
  } catch (err) {
    return commonErrors[500];
  }
};

// add group
const addGroup = async (req, res) => {
  try {
    await Groups.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    return res.json({
      message: "Group Created",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// update group
const updateGroup = async (req, res) => {
  try {
    await Groups.update(req.body, {
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Group Success Updated",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// delete group
const deleteGroup = async (req, res) => {
  try {
    await Groups.destroy({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Group Success Deleted",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

module.exports = {
  getGroups,
  getGroupById,
  addGroup,
  updateGroup,
  deleteGroup,
};
