const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database is not connected", err));

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));