import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addValue,
  addValueAsync,
} from "../redux/action/counterActons";

export const Products = () => {
  const [product, setProduct] = useState(0);
  const dispatch = useDispatch();
 
  return(
    <div>
      <input className="input"
      placeholder="Enter number"
      onChange={(e)=>{
        setProduct(e.target.value)
      }}/>
      <br/>
      <div className="buttons">
      <button
      className="button-addvalue"
      onClick = {() => {
        dispatch(addValue(product))
      }}
      >Add items</button>

      <button
      className="button-async"
      onClick={() => {
        dispatch(addValueAsync(product))
      }}>Add items asyncronious</button>
      </div>
    </div>
  )
} 