const Users = require("../models/Users");
const { commonErrors } = require("../utils/commonErrors");

// get current user
const getCurrentUser = async (req, res) => {
  try {
    const currentUser = await Users.findOne({
      where: { id: req.user.id },
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
