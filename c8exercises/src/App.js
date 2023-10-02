import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { Home } from './components/Home';
import { Movies } from './components/Movies';
import { NewMovie } from './components/NewMovie';
import { NotFound } from './components/NotFound';
import { MovieInfo } from './components/MovieInfo';

const movies = [
  {id: 1, title: "Les Émotifs anonymes", genre: "Romance", rating: 6.8, image: "https://www.ecranlarge.com/uploads/image/001/139/tunfscnh5ebrnoh2wm6unmn6fbx-867.jpg"},  
  {id: 2, title: "Gladiator", genre: "Action", rating: 8.5, image: "https://m.media-amazon.com/images/I/61MSIFHAxML._AC_UF894,1000_QL80_.jpg"},
  {id: 3, title: "Amelie", genre: "Romance", rating: 8.3, image: "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"},
  {id: 4, title: "Forest Gump", genre: "Drama", rating: 8.8, image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg"},
  {id: 5, title: "Shutter Island", genre: "Mystery", rating: 8.2, image: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
]

function App() {
  return (
    <div className="App">
      <nav>
        <Link className='link' to="/"><img className="navImg" src='/images/308229_home_icon.png'/></Link>
        <Link className='link' to="/movies"><img className="navImg" src='/images/285656_movie_icon.png'/></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies movies={movies}/>}/>
        <Route path="/movies/:id" element={<MovieInfo movies={movies}/>}/>
        <Route path="/movies/new" element={<NewMovie />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
