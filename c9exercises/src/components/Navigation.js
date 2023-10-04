import { Link } from "react-router-dom";

export const Navigation = () => {

  return(
    <div>
        <Link className="link" to="/">
          <img className="img" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png" alt="home"/>
        </Link>
       
        <Link  className="link" to="/users">
          <img className="img" src="https://www.pinclipart.com/picdir/middle/534-5346655_transparent-customer-icon-png-clipart.png"/>
        </Link>
    </div>
  )
}