require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(express.json()); // req.body
app.use(cors());

//routes

//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//dashboard route
app.use("/dashboard", require("./routes/dashboard"));

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
