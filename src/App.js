import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: userName,
          age: userAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
