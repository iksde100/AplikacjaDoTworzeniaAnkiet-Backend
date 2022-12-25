const commonErrors = {
  500: () =>
    res.status(500).send({
      message: "Błąd serwera",
    }),
};

module.exports = {
  commonErrors,
};
