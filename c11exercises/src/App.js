import './App.css';
import { useSelector, useDispatch} from "react-redux";
import { decrementValue, incrementValue } from './redux/action/counterActons';
import { Products } from './components/Products';
import { RandomFood } from './components/RandomFood';


function App() {
  const items = useSelector((state)=> state.items);
  const dispatch = useDispatch();

  const handleIncrement = () => {
   dispatch(incrementValue());
  }

  const handleDecrement = () => {
    dispatch(decrementValue());
  }

  return (
    <div className="App">
      <div className='randomfood'>
      <RandomFood/>
      </div>
      <hr/>

      <div className='items-container'>
      <h1>Items: {items}</h1>
        <button className='button-add'
        onClick={handleIncrement}>Add</button>
        <button className='button-remove'
        onClick={handleDecrement}>Remove</button>
        <Products/>
      </div>
      <hr/>
    </div>
 
  );
}

export default App;
