const express = require("express");

const answers = require("../controllers/Answers");
const surveys = require("../controllers/Surveys");
const auth = require("./../controllers/Auth");
const verify = require("./verifyToken");

const router = express.Router();

router.get("/answers", verify, answers.getAnswers);
router.get("/answers/:id", verify, answers.getAnswerById);
router.post("/answers/add", verify, answers.addAnswer);
router.put("/answers/update/:id", verify, answers.updateAnswer);
router.delete("/answers/delete/:id", verify, answers.deleteAnswer);

router.get("/surveys", verify, surveys.getSurveys);
router.get("/surveys/:id", verify, surveys.getSurveyById);
router.post("/surveys/add", verify, surveys.addSurvey);
router.put("/surveys/update/:id", verify, surveys.updateSurvey);
router.delete("/surveys/delete/:id", verify, surveys.deleteSurvey);

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);

module.exports = router;
