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
      const updatedCars = carsForSale.map((existingCar) =>
        existingCar.car === newCar ? { ...existingCar, quantity: existingCar.quantity + 1 } : existingCar
      );
      setCarsForSale(updatedCars);
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

  const buyCar = (vehicle) => {
    const updatedCarsForSale = carsForSale.map((carForSale) =>
      carForSale.id === vehicle.id
        ? { ...carForSale, quantity: carForSale.quantity - 1 }
        : carForSale
    );
  
    const carToBeRemoved = updatedCarsForSale.find(
      (carForSale) => carForSale.id === vehicle.id && carForSale.quantity === 0
    );
  
    if (carToBeRemoved) {
      const filteredCarsForSale = updatedCarsForSale.filter((carForSale) => carForSale.id !== carToBeRemoved.id
      );
      setCarsForSale(filteredCarsForSale);
    } else {
      setCarsForSale(updatedCarsForSale);
    };
  
    const ownedVehicle = ownedCars.find((ownedCar) => ownedCar.id === vehicle.id);
  
    if (ownedVehicle) {
      ownedVehicle.quantity += 1;
    } else {
      setOwnedCars([
        ...ownedCars,
        { id: vehicle.id, car: vehicle.car, quantity: 1 },
      ]);
    }
  };
  
  const sellCar = (vehicle) => {
    const updatedOwnedCars = ownedCars.map((ownedCar) =>
    ownedCar.id === vehicle.id
      ? { ...ownedCar, quantity: ownedCar.quantity - 1 }
      : ownedCars
  );

    const carToBeRemoved = updatedOwnedCars.find(
    (ownedCar) => ownedCar.id === vehicle.id && ownedCar.quantity === 0
  );

    if (carToBeRemoved) {
      const filteredOwnedCars = updatedOwnedCars.filter((ownedCar) => ownedCar.id !== carToBeRemoved.id
      );
      setOwnedCars(filteredOwnedCars);
    } else {
      setOwnedCars(updatedOwnedCars);
    };

    const updatedVehicleForSale = carsForSale.find((carForSale) => carForSale.id === vehicle.id);
  
    if (updatedVehicleForSale) {
      updatedVehicleForSale.quantity += 1;
    } else {
      setCarsForSale([
        ...carsForSale,
        { id: vehicle.id, car: vehicle.car, quantity: 1 },
      ]);
    }
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