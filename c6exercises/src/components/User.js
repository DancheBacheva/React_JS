//!ZADACA 1
//? Da se kreira aplikacijata od slikata,
//? da imame firstName, lastName, email , password i godini i tie da se cuvaat vo state.
//? Tie vrednosti od stejtot da se pokazuvaat vo tabela, no da ima moznost preku kopce da se krijat i pokazuvaat. 

//* BONUS: Pazete na tekstot na kopceto, dokolku treba da se pokazat tekstot da bide Show Results, dokolku treba da se skrijat da bide Hide Results

import { useState } from "react";

export const User = () => {
  const userInformation = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
  };
  const [userValues, setUserValues] = useState(userInformation);
  const [showTable, setShowTable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setUserValues({ ...userValues, [name]: value });
  };

  const tableShow = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <form>
        <h1>User Form</h1>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={userValues.firstname}
          onChange={handleChange}
        /><br/><br/>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={userValues.lastname}
          onChange={handleChange}
        /><br/><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userValues.email}
          onChange={handleChange}
        /><br/><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userValues.password}
          onChange={handleChange}
        /><br/><br/>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userValues.age}
          onChange={handleChange}
        /><br/><br/>
      </form>
      {showTable ? (
        <div>
          <button onClick={tableShow}>Hide results</button>
          <table border={2}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userValues.firstname}</td>
                <td>{userValues.lastname}</td>
                <td>{userValues.email}</td>
                <td>{userValues.password}</td>
                <td>{userValues.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <button onClick={tableShow}>Show results</button>
      )}
    </div>
  );
};
