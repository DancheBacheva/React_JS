export const incrementValue = () =>{
  return{
    type: "INCREMENT"
  };
};

export const addValue = (value) => {
  return{
    type: "ADDVALUE",
    payload: value
  }
}

export const addValueAsync = (value) => {
  return(dispatch) => {
    setTimeout(()=>{
      dispatch(addValue(value))
    }, 3000);
  };
};

export const decrementValue = () => {
  return{
    type: "DECREMENT"
  };
};