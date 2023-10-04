import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const NewMovie = () => {
const initialValues = { title: "", genre: "", rating: "" }
const [formValues, setFormValues] = useState(initialValues);

const [searchParams, setSearchParams] = useSearchParams({title: "", genre: ""});
  const title = searchParams.get("title")
  const genre = searchParams.get("genre")

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value})
} 

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(formValues);
}
  return(
    <div>
      <form>
        <input className="newMovieInput" 
        name="title"
        placeholder="Title"
        value={formValues.title}
        onChange={handleChange}/>
        <input className="newMovieInput"
        name="genre"
        placeholder="Genre"
        value={formValues.genre}
        onChange={handleChange}/>
        <input className="newMovieInput"
        name="rating"
        placeholder="Rating"
        value={formValues.rating}
        onChange={handleChange}
        />
        <br/>
        <button className="submit"
        type="submit"
        onClick={handleSubmit}
        >Submit</button>
      </form>

      <hr/>
      <Link
        className='link'
        to={`/movies/new?title=${title}&genre=${genre}`}
      >New movie</Link>
      <div>
        <h3>{title}</h3>
        <h4>{genre}</h4>
      </div>
    </div>
  )
}