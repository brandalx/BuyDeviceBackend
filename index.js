require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models.js");
const cors = require("cors");
const router = require("./routes/index");
const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is working correctly" });
});
app.get("/*", (req, res) => {
  res.json({ message: "404 not found" });
});
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (err) {
    console.log(err);
  }
};

start();
