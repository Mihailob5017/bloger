//requires
const express = require("express");
const cors = require("cors");
const mongooDB = require("mongoose");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const blogRoute = require("./routes/private/blogRoute");
const userRoute = require("./routes/private/userRoute");
const userModel = require("./model/RegisterModel");

require("dotenv/config");

//starting app the server
const port = process.env.PORT || 5000;
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/blogs", blogRoute);
app.use("/user", userRoute);
app.get("/allusers", async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.send(allUsers);
  } catch (error) {
    res.status(400).send("Something went wrong!");
  }
});

//connecting to the database
mongooDB.connect(
  process.env.DB_KEY,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongooDb connected");
  }
);

//start the server
app.listen(port, () => console.log("Server Started!"));
