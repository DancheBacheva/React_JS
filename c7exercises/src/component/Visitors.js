import { MovieContext } from "../App";
import React from "react";

export const Visitors = () => {
  const { visitors } = React.useContext(MovieContext);

  return(
    <div>
      <h3>Cast</h3>
      <ul>
        {visitors.map((visitor, i) => (
          <li key={i}>{visitor.name} {visitor.surname}</li>
        ))}
      </ul>
      <br/>
    </div>
  )
}

//*BONUS: Da napravime i uste edna komponenta visitors, on the site, vo koja kje prikazeme  nekoja lista od usernames koja kje bide pratena od app.js preku contekstot. 