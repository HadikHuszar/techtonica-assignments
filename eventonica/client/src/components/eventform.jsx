import React, { useState } from "react";

const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editName":
      console.log("Logged if the editName action is being dispatched");
      return { ...state, name: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

const initialState = {
  id: "",
  name: "",
  date: null,
  description: "",
  category: "",
  maxAttendees: 10,
  image: "",
};

const EventForm = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <form id="add-event" action="#">
        <fieldset>
          <label>ID </label>
          <input type="text" id="add-event-id" placeholder="enter Event ID" />
        </fieldset>

        <fieldset>
          <label>Name </label>
          <input
            type="text"
            placeholder="Virtual Corgi Meetup"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "editName",
                payload: e.target.value,
              })
            }
          />
        </fieldset>

        <fieldset>
          <label>Date </label>
          <input type="date" id="add-event-date" />
        </fieldset>

        <fieldset>
          <label>Description </label>
          <input
            type="text"
            placeholder="Enter description here"
            value={state.description}
            onChange={(e) =>
              dispatch({
                type: "editDescription",
                payload: e.target.value,
              })
            }
          />
        </fieldset>

        <fieldset>
          <label>Category </label>
          <input
            type="text"
            id="add-event-category"
            value={state.category}
            onChange={(e) =>
              dispatch({
                type: "editCategory",
                payload: e.target.value,
              })
            }
          />
        </fieldset>

        <fieldset>
          <label>Maximum Attendees </label>
          <input type="number" id="add-event-maxattendees" placeholder="10" />
        </fieldset>

        <fieldset>
          <label>Image </label>
          <input
            type="text"
            id="add-event-image"
            placeholder="Enter image here"
          />
        </fieldset>

        <input
          type="submit"
          value="Add Event"
          onClick={() => props.handleSubmit(state)}
        />
      </form>
    </div>
  );
};

export default EventForm;
