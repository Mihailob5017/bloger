const Router = require("express").Router();
const loginValidation = require("../auth/validation/loginValidation");
const loginModel = require("../model/RegisterModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

Router.post("/", async (req, res) => {
  // checking if everything is submited correctly
  const { error } = await loginValidation.validate(req.body);
  if (error) res.status(400).send("Something is sumbited incorrectly");

  // checking if the username exists
  const username = await loginModel.findOne({ username: req.body.username });
  if (!username) res.status(400).send("The username is incorrect");

  //checking if the password is correct
  const user = await loginModel.findOne({ email: req.body.email });
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordValid) res.status(400).send("The password is incorrect");

  //creating a user token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
  res.header("auth-token", token).send(token);
  res.send("Succesfully logged in");
});





module.exports = Router;
