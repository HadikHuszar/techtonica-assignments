const userRouter = require("./routes/users");

const express = require("express");

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const cors = require("cors");

app.use(cors());

require("./routes/users")(app);

app.get("/", (req, res) => {
  res.json({ message: "Hello from Elizabeth's server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
