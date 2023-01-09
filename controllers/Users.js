const { commonErrors } = require("../utils/commonErrors");
const Users = require("../models/Users");
const selectData = require("./../utils/selectData");

// get current user
const getCurrentUser = async (req, res) => {
  try {
    const currentUser = await Users.findOne({
      where: {
        ...selectData.byUserId(req),
      },
    });
    return res.send({
      id: currentUser.id,
      name: currentUser.name,
      surname: currentUser.surname,
      email: currentUser.email,
      createdAt: currentUser.createdAt,
    });
  } catch {
    return commonErrors[500];
  }
};

module.exports = {
  getCurrentUser,
};
