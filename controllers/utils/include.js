const Items = require("./../../models/Items");
const Groups = require("./../../models/Groups");

const item = () => ({
  model: Items,
  attributes: {
    exclude: ["id", "userId", "groupId"],
  },
});

const group = () => ({
  model: Groups,
  attributes: {
    exclude: ["id", "userId"],
  },
});

module.exports = {
  item,
  group,
};
