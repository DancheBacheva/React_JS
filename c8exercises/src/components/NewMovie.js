import { useState } from "react";

export const NewMovie = () => {
const initialValues = { title: "", genre: "", rating: "" }
const [formValues, setFormValues] = useState(initialValues);

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
    </div>
  )
}