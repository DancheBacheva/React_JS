import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";
import { Link} from "react-router-dom";

export const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch(`${API_URL}/users`)
    .then((res) => res.json())
    .then((result) =>setUsers(result))
    .catch((err)=> alert(err));
  }, []);

  return(
    <div>
      <h1>Users</h1>
      <hr/>
      {users.length > 0 ? (
        <div>
          {users.map((user)=> {
            return (
              <div key={user.id}>
                <h3>{user.name}</h3>
                {/* <p>EMAIL: {user.email}</p> */}
                <Link className="link" to={`/userdetails/${user.id}`}>User details</Link>
                <hr/>
              </div>
            );
          })}
        </div>
        
    ):(
      <h2>Loading...</h2>
      )}
    </div>
  );
};