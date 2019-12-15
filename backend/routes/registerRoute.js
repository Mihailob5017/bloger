const Router = require("express").Router();
const bcrypt = require("bcryptjs");
const JoiRegisterValidator = require("../auth/validation/registerValidation");
const registerModel = require("../model/RegisterModel");

Router.post("/", async (req, res) => {
  //validating the data with hapi/joi
  const { error } = JoiRegisterValidator.validate(req.body);
  if (error) res.status(400).send("Something is submited incorrectly");

  // checking if the email already exists
  const emailExists = await registerModel.findOne({ email: req.body.email });
  if (emailExists) res.status(400).send("The email is already taken");

  // checking if the username already exists
  const userExists = await registerModel.findOne({
    username: req.body.username
  });
  if (userExists) res.status(400).send("The username is already taken");

  // hashing the password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //saving the new user to the database
  const newUser = new registerModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    await newUser.save().then(() => res.send("Account Successfuly Created,Welcome to Bloger"));
  } catch (error) {
    res.status(400).send("Something is wrong.Please Try again ");
  }
});

module.exports = Router;
