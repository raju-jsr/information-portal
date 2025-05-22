const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const router = require("./routes/portalRoutes");
const errHandler = require("./middleware/errorHandler");

connectDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/portal/bike/", router);

app.use(errHandler);

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
