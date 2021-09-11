// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// const cors = require("cors");

// app.use(cors());

const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

let allUsers = [marlin, nemo, dory];

module.exports = function (app) {
  app.get("/users", (req, res) => {
    res.json(allUsers);
  });

  app.post("/users", (req, res) => {
    // console.log(req.body);
    allUsers.push(req.body);
    res.json(req.body);
  });

  app.delete("/users", (req, res) => {
    allUsers = allUsers.filter((user) => user.id != req.body.id);
    res.json({ message: "success" });
  });
};

// const addUser = () => {
//   // Adds a new User
// };

// const updateUser = () => {
//   // Update existing User
// };

// const deleteUser = () => {
//   // Deletes User
// };

// export { allUsers, addUser, updateUser, deleteUser };
// export { allUsers };
