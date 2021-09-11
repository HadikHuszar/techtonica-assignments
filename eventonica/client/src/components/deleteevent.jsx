import React, { useState } from "react";

function DeleteEvent(props) {
  const [id, setId] = useState();
  console.log(id);
  console.log(props);
  return (
    <div id="delete-event-block">
      <h3>Delete Event</h3>
      <form id="delete-event" action="#">
        <fieldset>
          <label>Event ID </label>
          <input
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="number"
            min="1"
            id="delete-event-id"
          />
        </fieldset>
        <input
          type="submit"
          value="Delete Event"
          onClick={() => props.deleteEvent(id)}
        />
      </form>
    </div>
  );
}

export default DeleteEvent;
