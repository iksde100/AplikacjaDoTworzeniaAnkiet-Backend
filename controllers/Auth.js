const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/Users");

const registerSchema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

// register user
const registerUser = async (req, res) => {
  // LETS VALIDATE THE DATA BEFORE WE A USER
  // I sposób
  // const validation = registerSchema.validate(req.body);
  // res.send(validation);

  // II sposób
  const { error } = registerSchema.validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  if (error) return res.status(400).send(error);

  // Checking if the user is already on database
  const emailExist = await Users.findOne({
    where: { email: req.body.email },
  });

  // if (emailExist) return res.status(400).send("Email is already exists");
  if (emailExist)
    return res.status(400).send({
      message: "Email is already exists",
    });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  };
  try {
    await Users.create(user);
    res.json({
      message: "User Registered",
    });
  } catch (err) {
    console.log(err);
  }
};

const loginSchema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().required(),
});

// login user
const loginUser = async (req, res) => {
  // LETS VALIDATE THE DATA BEFORE WE A USER
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send(error);

  // Checking if the email exists
  const user = await Users.findOne({ where: { email: req.body.email } });
  if (!user)
    return res.status(400).send({
      message: "Email is not found",
    });

  // PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(400).send({
      message: "Invalid password",
    });

  // Create and assign a token
  const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({
    jwt: token,
  });

  // res.send("Logged in!");
};

module.exports = {
  registerUser,
  loginUser,
};
