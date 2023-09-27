import './App.css';
import React from "react";
import { FormValidation } from './component/FormValidation';
import { Movie } from './component/Movie';
import { Visitors } from './component/Visitors';

export const MovieContext = React.createContext();

const visitors = [
  {name: "Russell ", surname: "Crowe"},
  {name: "Jennifer", surname: "Connelly"},
  {name: "Josh", surname: "Lucas"},
  {name: "Adam", surname: "Goldberg"},
  {name: "Anthony", surname: "Rapp"},
  {name: "Paul", surname: "Bettany"},
  {name: "Ed", surname: "Harris"},
  {name: "Christopher", surname: "Plummer"},
]

function App() {

  return (
    <div className="App">
        <FormValidation />
      <hr/>

      <MovieContext.Provider value={{
      images: ["https://amblin.com/wp-content/uploads/2018/09/beautifulmind_2001_photo_1920x1080-1_hero-1920x1080.jpg", "https://m.media-amazon.com/images/M/MV5BZTY1NTZhNDUtMzIzZC00YjgzLTlhMzEtYWUzM2U1NzIzZWI3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", "https://cdn.britannica.com/18/77318-050-503ED25F/Russell-Crowe-Jennifer-Connelly-A-Beautiful-Mind-2001.jpg"],
      rating: 8,
      genre: "Drama",
      plot: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
      releaseDate:  "January 4, 2002",
      linkToTheTrailer: "https://www.imdb.com/video/vi1801239321/?playlistId=tt0268978&ref_=tt_ov_vi",
      visitors: visitors,
      }}>
          <Movie />
          <Visitors />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
