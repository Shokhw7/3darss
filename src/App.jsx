import { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const name = useRef();
  const email = useRef();
  const age = useRef();
  const form = useRef();

  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "Diana", age: 28, email: "diana@example.com" },
    { id: 5, name: "Ethan", age: 27, email: "ethan@example.com" },
  ]);

  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => {
      return [
        ...prev,
        {
          name: name.current.value,
          email: email.current.value,
          age: age.current.value,
          id: uuidv4(),
        }
      ]
    })
          name.current.value = "";
          email.current.value = "";
          age.current.value = "";
  };

  return (
    <>
      <form className="form-container m-auto justify-center flex" ref={form} onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" ref={name} />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" ref={email} />
        </div>
        <div>
          <label htmlFor="">Age:</label>
          <input type="number" ref={age} />
        </div>
        <button>Add Use</button>
      </form>

      <ul>
        {users.map((user) => {
          return (
            <li className="user-card" key={user.id}>
              <h3 className="">{user.name}</h3>
              <p className="">{user.email}</p>
              <button className="" onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;