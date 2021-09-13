import React, { useEffect, useState } from "react";
import DeleteUser from "./deleteuser.jsx";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  };

  useEffect(() => {
    getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
  });

  ///// USE STATES  ///////

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  //// EVENT HANDLERS //////

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newUser = { id: id, name: name, email: email };
    const newUser = { name: name, email: email, id: id };
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => res.json());
    // .then((res) => setUsers([...users, newUser]));
    // setUsers([...users, newUser]);
    setName("");
    setId("");
    setEmail("");
  };

  const deleteUser = (id) => {
    console.log("delete user", id);

    fetch("http://localhost:3001/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const newUsers = users.filter((i) => i.id != id);
    setUsers(newUsers);
  };

  ////////////// RENDERING OF USER COMPONENT /////////////////////

  return (
    <section className="user-management">
      <h2>User Management</h2>
      <div>
        <h3>All Users</h3>
        <ul id="users-list">
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#">
          {/* ////// User Name Field /////// */}
          <fieldset>
            <label>Name </label>
            <input
              type="text"
              id="add-user-name"
              placeholder="enter User Name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          {/* ////// User ID Field /////// */}
          <fieldset>
            <label>ID </label>
            <input
              type="text"
              id="add-user-id"
              placeholder="enter User ID here"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </fieldset>

          {/* ////// User eMail Field /////// */}
          <fieldset>
            <label>email </label>
            <input
              type="email"
              id="add-user-email"
              placeholder="enter User eMail here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          {/* ////// ADD USER BUTTON /////// */}
          <input type="submit" value="Add User" onClick={handleSubmit} />
        </form>
      </div>

      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};

export default Users;
