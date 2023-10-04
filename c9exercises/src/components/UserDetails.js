import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";

export const UserDetails = () => {
  const { id } = useParams();

  const [ user, setUser] = useState(undefined);

  useEffect(()=> {
    fetch(`${API_URL}/users/${id}`)
    .then((res) => res.json())
    .then((result) =>setUser(result))
    .catch((err)=> alert(err));
  }, []);

  return(
    <div>
      <h3>User details</h3>
      {user ? (
        <table border={3}>
          <thead>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
          </thead>
          <tbody>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.street} {user.address.suite}, {user.address.city}</td>
            <td>{user.phone}</td>
          </tbody>
        </table>
      ) : (
        <h1>Loading details...</h1>
      )}
    </div>
  );
};