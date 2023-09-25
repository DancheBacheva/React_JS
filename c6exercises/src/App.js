import './App.css';
import { useState } from "react";
import { CarsForSale } from './components/CarsForSale';
import { User } from './components/User';

function App() {
  const [carsForSale, setCarsForSale] = useState([
    { id: 1, car: "BMW", sold: false, quantity: 3},
    { id: 2, car: "AUDI", sold: false, quantity: 3},
    { id: 3, car: "FORD", sold: false, quantity: 3},
  ]);

  const [newCar, setNewCar] = useState("");
  const [ownedCars, setOwnedCars] = useState([]);

  const addCar = () => {
     const carExists = carsForSale.find((existingCar) => existingCar.car === newCar);
  
    if (carExists) {
      const updatedCars = [...carsForSale];
      const carIndex = updatedCars.findIndex((existingCar) => existingCar.car === newCar);
      
      if (carIndex >= 0) {
        updatedCars[carIndex].quantity += 1;
        setCarsForSale(updatedCars);
      }
    } else {
      const newCarEntered = {
        id: carsForSale.length + 1,
        car: newCar,
        sold: false,
        quantity: 1,
      };
      setCarsForSale([...carsForSale, newCarEntered]);
      setNewCar("");
      }
  };


  const buyCar = (car) => {
    const updatedCarsForSale = carsForSale.filter((item) => item.id !== car.id);
    const updatedOwnedCars = [...ownedCars, car];

    setCarsForSale(updatedCarsForSale);
    setOwnedCars(updatedOwnedCars);
  };  

  const sellCar = (ownedCar) => {

  }

  return (
    <div className="App">
      <div className="carsforsale">
        <h1>Cars for sale</h1>
        <input placeholder="Enter new brand"
        value={newCar}
        onChange={(e) => {
          setNewCar(e.target.value);
        }}
        /><button onClick={addCar}>Add new Brand</button>
      </div>
      <CarsForSale listOfCarsForSale={carsForSale} ownedCars={ownedCars} buyCar={buyCar} sellCar={sellCar}/>
      
          <hr/>
          <User />

    </div>
  );
}

export default App;