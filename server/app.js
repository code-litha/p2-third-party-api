require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.listen(PORT, () => {
  console.log(`Listening on PORT `, PORT);
});
