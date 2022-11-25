const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const verifyPayment = require("./api/controllers/verifyTransaction.js");
app.use(bodyParser.json());

app.use("/api/payment/verify", verifyPayment);

app.get("/", (req, res) => {
  res.json({
    hello: "Paystack REST API",
  });
});

app.listen(3000, function () {
  console.log("App is listening on https://localhost:3000");
});
