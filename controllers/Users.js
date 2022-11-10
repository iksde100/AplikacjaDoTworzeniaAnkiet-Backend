const Users = require("../models/Users");

// get current user
const getCurrentUser = async (req, res) => {
  try {
    const currentUser = await Users.findOne({
      where: { id: req.user.id },
    });
    res.send({
      id: currentUser.id,
      name: currentUser.name,
      surname: currentUser.surname,
      email: currentUser.email,
      createdAt: currentUser.createdAt,
    });
  } catch {
    console.log(err);
  }
};

module.exports = {
  getCurrentUser,
};
