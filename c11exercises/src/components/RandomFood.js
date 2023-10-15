import axios from "axios";
import { useState, useEffect} from "react";
import "./RandomFood.css"

export const RandomFood = () => {
  const [food, setFood] = useState([]);

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => setFood(res.data.meals))
    .catch((err)=>{
      console.log(err);
    });
  }, []);

  return(
    <div className="elements-container">
      {
        food.map((meal, i)=> {
          return (
            <div key={i}>
              <h1>{meal.strMeal}</h1>
              <h3>{meal.strCategory}</h3>
              <h3>{meal.strArea}</h3>
              <p>{meal.strInstructions}</p>
            </div>
          )
        })
      }
    </div>
  )
}