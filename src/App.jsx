import Form from "./components/Form";
import UserList from "./components/UserList";
import { data } from "./data";
import User from "./components/User";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(data);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Form setUsers={setUsers} />
      <UserList setUsers={setUsers} users={users} handleDelete={handleDelete} />
    </>
  );
}

export default App;