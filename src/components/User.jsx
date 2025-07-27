function User ({ user, handleDelete }){
    return (
        <li className="user-card" key={user.id}>
              <h3 className="">{user.name}</h3>
              <p className="">{user.email}</p>
              <p className="">{user.age}</p>
              <button className="" onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
    )
}

export default User