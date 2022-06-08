import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setEntertedUsername] = useState("");
  const [enteredAge, setEntertedAge] = useState("");
  const [errorState, setErrorState] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorState({
        title: "Invalid Input",
        message: "Please enter a valid name or age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setErrorState({
        title: "Invalid Input",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEntertedUsername("");
    setEntertedAge("");
  };

  const usernameChangeHandler = (event) => {
    setEntertedUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEntertedAge(event.target.value);
  };

  const errorHandler = () => {
    setErrorState(null);
  };
  return (
    <Wrapper>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
