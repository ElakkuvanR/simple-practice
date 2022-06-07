import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="text" id="age"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
