const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const cookieParser = require("cookie-parser");
const path = require("path");
const connect = require("./utils/db.js");
const userRouter = require("./routes/user-route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET , POST , DELETE , PUT , PATCH ",
    credentials: true,
  })
);

app.use("/user", userRouter);

const PORT = 3000;
connect().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
});
