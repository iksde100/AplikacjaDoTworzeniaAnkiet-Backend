const { commonErrors } = require("../utils/commonErrors");
const Surveys = require("../models/Surveys");
const selectData = require("./../utils/selectData");

// get all surveys
const getSurveys = async (req, res) => {
  try {
    const answers = await Surveys.findAll({
      where: {
        ...selectData.byUserId(req),
      },
    });
    return res.send(answers);
  } catch (err) {
    return commonErrors[500];
  }
};

// get survey by id
const getSurveyById = async (req, res) => {
  try {
    const answer = await Surveys.findOne({
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

// add survey
const addSurvey = async (req, res) => {
  console.log(req.body);
  try {
    await Surveys.create({
      ...req.body,
      ...selectData.byUserId(req),
    });
    return res.json({
      message: "Survey Created",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// update survey
const updateSurvey = async (req, res) => {
  try {
    await Surveys.update(req.body, {
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Survey Success Update",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

// delete survey
const deleteSurvey = async (req, res) => {
  try {
    await Surveys.destroy({
      where: {
        id: req.params.id,
        ...selectData.byUserId(req),
      },
    });
    return res.json({
      message: "Survey Success Delete",
    });
  } catch (err) {
    return commonErrors[500];
  }
};

module.exports = {
  getSurveys,
  getSurveyById,
  addSurvey,
  updateSurvey,
  deleteSurvey,
};
