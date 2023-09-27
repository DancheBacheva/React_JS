import { MovieContext } from "../App";
import React from "react";

export const VisualInfo = () => {
  const visualInfo = React.useContext(MovieContext)

  return(
    <div>
      <a href={visualInfo.linkToTheTrailer}>Link to the trailer</a><br/>
      {visualInfo.images.map((image, i) => (
        <img key={i} src={image} style={{ width: 300, height: 200 }}/>
      ))}
    </div>
  )
}