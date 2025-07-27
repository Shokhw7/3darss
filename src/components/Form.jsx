import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ setUsers }) {
  const name = useRef();
  const email = useRef();
  const age = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: name.current.value.trim(),
      email: email.current.value.trim(),
      age: Number(age.current.value),
    };

    if (!newUser.name || !newUser.email || isNaN(newUser.age)) {
      alert("Iltimos hamma qatorlarni toldiring");
      return;
    }

    setUsers((prev) => [...prev, newUser]);

    name.current.value = "";
    email.current.value = "";
    age.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md mx-auto my-4 flex flex-col gap-2">
      <input ref={name} type="text" placeholder="Name" className="border p-2 rounded" />
      <input ref={email} type="email" placeholder="Email" className="border p-2 rounded" />
      <input ref={age} type="number" placeholder="Age" className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">Add User</button>
    </form>
  );
}

export default Form;
