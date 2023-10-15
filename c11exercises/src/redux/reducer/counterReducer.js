const initialState = { items: 0 };

export const counterReducer = ( state = initialState, action) => {
  switch(action.type){
    case "INCREMENT": {
      return {...state, items: state.items + 1};
    }

    case "ADDVALUE": {
      return {
        ...state, items: state.items + Number(action.payload)
      }
    }

    case "DECREMENT": {
      return {...state, items: state.items - 1};
    }

    default: {
      return state;
    }
  }
};