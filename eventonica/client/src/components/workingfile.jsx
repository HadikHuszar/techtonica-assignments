import React, {useState} from "react";
import DeleteUser from "./DeleteUser";

function Users() {
const marlin = { name: "Marlin", email: "marlin@gmail.com", id:"1" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
const dory = { name: "Dory", email: "dory@gmail.com" , id: "3"};

/****States*****/
const [users, setUsers] = useState([marlin, nemo, dory])

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [id, setId] = useState('')

// console.log(name, email, id)

// id, name, and email are states that store what values the user types in those fields
// users is an array of user objects
// All of these states can be defined in the component
const handleSubmit = e => {
  e.preventDefault();
  const newUser = {id: id, name: name, email: email};
  setUsers([...users, newUser]);
  console.log(newUser)
};

const deleteUser = (id) => {
  console.log("delete user", id )
  const newUsers = users.filter(i=>i.id !== id)
  setUsers(newUsers)
};

  return (
    <section className="user-management">
        <h2>User Management</h2>

        <ul id="users-list">
          {/* display all existing Users here */}
          {users.map(user => (
          <li>{user.name}</li>
      ))}
        </ul>

        <div>
          <h3>Add User</h3>
          <form id="add-user" action="#">
            <fieldset>
              <label>Name</label>
              <input type="text" id="add-user-name"  value ={name} 
              onChange={(e) => setName(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input type="email" id="add-user-name" value ={email} 
              onChange={(e) => setEmail(e.target.value)}
               />
            </fieldset>
            <fieldset>
              <label>ID</label>
              <input type="text" id="add-user-name"  value ={id} 
              onChange={(e) => setId(e.target.value)}/>
            </fieldset>
            <input type="submit" value="Add" onClick={handleSubmit}/>
          </form>
        </div>
        <DeleteUser deleteUser={deleteUser} />
    </section>
  )
}
export default Users