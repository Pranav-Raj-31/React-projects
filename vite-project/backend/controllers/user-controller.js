const userModel = require("../models/user-model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async function (req, res) {
  try {

    let { username, phone, email, password } = req.body;

    let userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).send("User already exists");
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let createUser = await userModel.create({
            username,
            email,
            phone,
            password: hash,
          });

          let token = jwt.sign(
            { email: createUser.email, id: createUser._id },
            process.env.JWT_SECRET_KEY
          );
          res.cookie("token", token);
          res.status(201).send({ token, user: createUser });
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.loginUser = async function (req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).send("Invalid email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send("Invalid email or password");

  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET_KEY
  );
  res.cookie("token", token, { httpOnly: true });
  res.status(200).json({ token, user });
};

module.exports.logoutUser = async function (req, res) {
  try {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).send("User logged out successfully");
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).send("Server error during logout");
  }
};



module.exports.logoutUser = async function (req, res) {
  try {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
    res.status(200).send("User logged out successfully");
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).send("Server error during logout");
  }
};