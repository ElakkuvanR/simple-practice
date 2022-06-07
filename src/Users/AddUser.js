import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input type="text" id="username"></input>
      <label htmlFor="age">Age (Years)</label>
      <input type="text" id="age"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
