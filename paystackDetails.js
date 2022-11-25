require("dotenv").config();

const params = {
  hostname: "api.paystack.co",
  port: 443,
  path: "/paymentrequest",
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TEST_PAYSTACK_API}`,
    "Content-Type": "application/json",
  },
};
