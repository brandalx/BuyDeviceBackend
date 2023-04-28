require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 5001;
const app = express();
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("Server started on port " + PORT));
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
};
