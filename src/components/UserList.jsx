import React from "react";
import User from "./User";

function UserList({ users, setUsers, handleDelete}) {
  return (
    <ul>
      {users.map((user) => {
        return <User key={user.id} user={user} setUsers={setUsers} handleDelete={handleDelete}></User>;
      })}
    </ul>
  );
}

export default UserList;
