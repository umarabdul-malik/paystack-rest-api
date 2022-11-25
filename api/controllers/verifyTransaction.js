const express = require("express");
const https = require("https");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const ref = req.query.reference;
  let output;
  await axios
    .get(`https://api.paystack.co/transaction/verify/${ref}`, {
      headers: {
        authorization: `Bearer ${process.env.TEST_PAYSTACK_API}`,
        //replace TEST SECRET KEY with your actual test secret
        //key from paystack
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
    })
    .then((success) => {
      output = success;
    })
    .catch((error) => {
      output = error;
    });

  if (!output.response && output.status !== 200) {
    res.send("Check your internet connection and try again later!");
  }
  if (output.response && !output.response.data.status) {
    res.send(
      `<p>Error verifying transaction ID ${ref}. Please contact support at <a href="mailto:hikerapps@gmail.com">HikerApps</a></p>`
    );
  }

  const { id, email, customer_code } = output.data.data.customer;
  const { status, reference, currency, fees, ip_address } = output.data.data;

  res.json({
    id,
    email,
    customer_code,
    status,
    reference,
    currency,
  });
});

module.exports = router;
