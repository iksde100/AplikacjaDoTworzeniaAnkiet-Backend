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
    res.send(groups);
  } catch (err) {
    console.log(err);
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
    res.send(group);
  } catch (err) {
    console.log(err);
  }
};

// add group
const addGroup = async (req, res) => {
  try {
    await Groups.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    res.json({
      message: "Group Created",
    });
  } catch (err) {
    console.log(err);
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
    res.json({
      message: "Group Success Updated",
    });
  } catch (err) {
    console.log(err);
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
    res.json({
      message: "Group Success Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getGroups,
  getGroupById,
  addGroup,
  updateGroup,
  deleteGroup,
};
