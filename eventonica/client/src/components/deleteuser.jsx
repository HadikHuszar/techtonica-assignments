import React, { useState } from "react";

function DeleteUser(props) {
  const [userId, setUserId] = useState();
  return (
    <div>
      <h3>Delete User</h3>
      <form id="delete-user" action="#">
        <fieldset>
          <label>User ID </label>
          <input
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            type="text"
            id="delete-user-id"
          />
        </fieldset>
        {/* <input type="submit" /> */}
        <input
          type="submit"
          value="Delete User"
          onClick={() => props.deleteUser(userId)}
        />
      </form>
    </div>
  );
}

export default DeleteUser;
