var pgp = require("pg-promise")(/* options */);
var db = pgp("postgres://postgres@localhost:5432/eventonica");

module.exports = function (app) {
  // app.get("/users", (req, res) => {
  //   res.json(allUsers);
  // });

  app.get("/users", (req, res) => {
    db.many("SELECT * FROM public.users")
      .then((data) => {
        console.log("DATA from Users.js", data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // app.post("/users", (req, res) => {
  //   // console.log(req.body);
  //   allUsers.push(req.body);
  //   res.json(req.body);
  // });

  // app.put("/users", (req, res) => {
  //   // console.log(req.body);
  //   db.any("INSERT INTO public.users VALUES ($1) RETURNING name, email, id", [
  //     users,
  //   ])
  //     .then((users) => {
  //       console.log("User ADDED to Users.js", users);
  //       res.json({ insert: "success" });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // data.push(req.body);
  //   // res.json(req.body);
  // });

  app.post("/users", (req, res) => {
    // const { name } = req.body;
    db.any(
      "INSERT INTO public.users(name, email, id) VALUES ($1, $2, $3) RETURNING id",
      [req.body.name, req.body.email, req.body.id]
    )
      .then(() => {
        console.log("User Added", req.body);
        // return res.redirect("http://localhost:3001");
        res.json({ insert: "success" });
      })
      .catch((err) => {
        console.log(err);
      });
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
