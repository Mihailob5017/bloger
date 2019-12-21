const Router = require("express").Router();
const jwtAuth = require("../../auth/jwt-auth");
const joiBlogValidation = require("../../auth/validation/blogValidation");
const blogModel = require("../../model/AddBlogModel");
Router.get("/", jwtAuth, async (req, res) => {
  try {
    const allModels = await blogModel.find();
    res.send(allModels);
  } catch (error) {
    res.status(404).send("No Blogs Where found!");
  }
});

Router.post("/", jwtAuth, async (req, res) => {
  const { error } = joiBlogValidation.validate(req.body);
  if (error) res.status(400).send("Something is sumbited incorrectly");

  const newBlog = new blogModel({
    username: req.body.username,
    header: req.body.header,
    body: req.body.body
  });
  try {
    await newBlog.save().then(() => res.send("Blog Successfuly saved!"));
  } catch (error) {
    res.status(400).send("Something went wrong!");
  }
});
Router.delete("/:blogid", jwtAuth, async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.params.blogid).then(() => {
      res.send("Succesfully deleted");
    });
  } catch (error) {
    res.status(404).send("Could not delete the post");
  }
});


module.exports = Router;
