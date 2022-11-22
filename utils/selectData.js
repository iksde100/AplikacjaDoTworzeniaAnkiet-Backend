const byUserId = (req) => ({
  userId: req.user.id,
});

module.exports = {
  byUserId,
};
