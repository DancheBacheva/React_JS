//! ZADACA 2
//?Da se kreira aplikacija slicna na zadacata od casot za TODOs
//?da imame nekoja pocetna lista so avtomobili i da imame moznost za dodavanje na nov avtomobil vo taa lista.
//?Do sekoj avtomobil od listata da ima kopce Buy so koe bi se kupil avtomobilot i bi se prefrlil vo drugata lista odnosno listata na OWned Cars

//*BONUS: moze da se dodade za sekoj avtomobil 
//?da ima quantity, odnosno kolku avtomobili postojat od toj tip i na toj nacin da se regulira 
//?kolku od niv mozat da se kupat i dokolku se kupeni site da gi snema od listata za prodazba.

export const CarsForSale = ({ listOfCarsForSale, ownedCars, buyCar, sellCar}) => {

  return(
    <div className="maincontainer">
      <div className="car">
        <ol>
          {listOfCarsForSale.map((vehicle, i)=>{
            return (
              <li key={i}>
                <span>{vehicle.car}</span>
                <p>{vehicle.quantity}</p>
                <button
                type="submit"
                value={vehicle.sold}
                onClick={() => buyCar(vehicle)}
                >Buy</button>
              </li>
            ) 
          })}
        </ol>
      </div>
      <hr/>
      <h1>Owned cars</h1>
      <div className="ownedcars">
        <ol>
          {ownedCars.map((ownedCar) => {
            return(
            <li key={ownedCar.id}>
              <span>{ownedCar.car}</span>
              <p>{ownedCar.quantity}</p>
              <button
                type="submit"
                value={ownedCar.sold}
                onClick={() => sellCar(ownedCar)}
                >Sell</button>
            </li>
            )
         })}
        </ol>
      </div>
    </div>
  )
}

