const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const generateRandom = () => {
  const id = uuidv4();
  const refence = `${process.env.REFENCE_PREFIX}${id}`;
  console.log(refence); // lenght is 45
};

module.exports = { generateRandom };
