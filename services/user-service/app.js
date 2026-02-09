const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("User Service connected to Mongo"))
  .catch(err => console.log(err));

app.get("/health", (req, res) => {
  res.json({ service: "User Service", status: "Healthy" });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
