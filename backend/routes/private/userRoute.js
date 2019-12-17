const Router = require("express").Router();
const jwtAuth = require("../../auth/jwt-auth");
const jwt = require("jsonwebtoken");
const userModel = require("../../model/RegisterModel");

Router.get("/", jwtAuth, async (req, res) => {
  const token = req.header("auth-token");
  if (!token) res.status(401).send("You do not have a token,access denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN);
    const resault = await userModel.findOne({ _id: verified._id });
    res.send(resault);
  } catch (error) {
    res.status(401).send("Invalid Token,Access Denied");
  }
});
module.exports = Router;
