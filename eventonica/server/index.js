const userRouter = require("./routes/users");
// var pgp = require("pg-promise")(/* options */);
// var db = pgp("postgres://postgres@localhost:5432/eventonica");

// db.many("SELECT * FROM public.users")
//   .then(function (data) {
//     console.log("DATA:", data);
//   })
//   .catch(function (error) {
//     console.log("ERROR:", error);
//   });

// db.many("SELECT * FROM public.users")
//   .then((data) => {
//     console.log("DATA from Users.js", data);
//     // res.json(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
