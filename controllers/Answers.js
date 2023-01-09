const { commonErrors } = require("../utils/commonErrors");
const Answers = require("../models/Answers");
const selectData = require("./../utils/selectData");

// get all answers
const getAnswers = async (req, res) => {
  try {
    const answers = await Answers.findAll({
      where: {
        ...selectData.byUserId(req),
      },
    });
    return res.send(answers);
  } catch (err) {
    return commonErrors[500];
  }
};

// get answer by id
const getAnswerById = async (req, res) => {
  try {
    const answer = await Answers.findOne({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.send(answer);
  } catch (err) {
    return commonErrors[500];
  }
};

// add answer
const addAnswer = async (req, res) => {
  try {
    await Answers.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    return res.json({
      message: "Answer Created",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// update answer
const updateAnswer = async (req, res) => {
  try {
    await Answers.update(req.body, {
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Answer Success Update",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// delete answer
const deleteAnswer = async (req, res) => {
  try {
    await Answers.destroy({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Answer Success Delete",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

module.exports = {
  getAnswers,
  getAnswerById,
  addAnswer,
  updateAnswer,
  deleteAnswer,
};
