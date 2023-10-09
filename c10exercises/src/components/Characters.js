import { useState } from "react";
import { Link } from "react-router-dom";

export const Characters = ({
  characterData,
  location,
  episode,
 }) => {
  const [locationDetails, setLocationDetails] = useState(false);
  const [showEpisodes, setShowEpisodes] = useState(false);

    return(
    <div>
    <div className="main-container">
      {
        characterData.map((character) =>(
          <div className="character-container" key={character.id}>
          <h2>{character.id}. {character.name}</h2>
          <img className="character-img" src={character.image} alt="characterImg"/>
          <h3>Status: {character.status}</h3>

          <h3>Location: <Link className="link"
          onClick={() => setLocationDetails(!locationDetails)}
          >{character.location.name}</Link></h3>
          {
          locationDetails && (
            <Link className="link" to={character.location.name}>
            <div>
              {location.map((place, i) => {
                if (place.name === character.location.name) {
                  return (
                    <div key={i}>
                      <h5>Type: {place.type}</h5>
                      <h5>Dimension: {place.dimension}</h5>
                      <hr />
                    </div>
                  );
                }
                return null;
            })}
            </div>
            </Link>
          )}

          <h3><Link className="link"
          onClick={() => setShowEpisodes(!showEpisodes)}>
          Episodes</Link></h3>
          {showEpisodes && (
          <ul>
          {episode.map((ep, i) => (
            <div key={i}>
              <li className="episodes" >{ep.episode}: {ep.name}</li>
              <h6>Air date: {ep.air_date}</h6>
            </div>
          ))}
        </ul>
        )}
          </div>
        ))
      }
     
    </div>
    <hr/>
    </div>
  )
}