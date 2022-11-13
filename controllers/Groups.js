const Groups = require("./../models/Groups");

// get all groups
const getGroups = async (req, res) => {
  try {
    const groups = await Groups.findAll({
      where: { idUser: req.user.id },
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
        idUser: req.user.id,
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
      idUser: req.user.id,
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
        idUser: req.user.id,
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
        idUser: req.user.id,
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
