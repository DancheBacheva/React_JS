import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Characters } from './components/Characters';
import {useEffect, useState} from "react";
import { Pagination } from './components/Pagination';
import { API_URL } from "./utils/constants";
import { LocationInfo } from './components/LocationInfo';
import { EpisodeDetails } from './components/EpisodeDetails';


function App() {
  const [characterData, setCharacterData] = useState([]);
  const [location, setLocation] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(3);

  useEffect(() => {
    fetch(API_URL + "/character")
      .then((res) => res.json())
      .then((result) => setCharacterData(result.results))
      .catch((err) => alert(err));

      fetch(API_URL + "/location")
      .then((res) => res.json())
      .then((result) => setLocation(result.results))
      .catch((err) => alert(err));

      fetch(API_URL + "/episode")
      .then((res) => res.json())
      .then((result) => setEpisode(result.results))
      .catch((err) => alert(err));
  }, []);

    const lastCharacterIndex = currentPage * charactersPerPage;
    const firstCharacterIndex = lastCharacterIndex - charactersPerPage;
    const currentCharacters = characterData.slice(firstCharacterIndex, lastCharacterIndex);

  return (
    <div className="App">
      <h1>RICK AND MORTY <Link className="link" to="/character">CHARACTERS</Link></h1>   
  
      <Routes>
        <Route path="/character" element={<Characters
         characterData={currentCharacters}
         location={location}
         episode={episode}
        />} />
        <Route path="/location/:id" element={<LocationInfo
        location={location}
        />}/>
        <Route path="/episode/:id" element={<EpisodeDetails
        episode={episode}
        />}/>

      </Routes>
    
      <Pagination
        totalCharacters={characterData.length}
        charactersPerPage={charactersPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}/>
    </div>
  );
}

export default App;

