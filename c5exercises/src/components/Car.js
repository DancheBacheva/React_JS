import { useState, useEffect } from "react";

export const Car = () => {

  const [car1likes, setcar1likes] = useState(0);
  const [car2likes, setcar2likes] = useState(0);
  const [car3likes, setcar3likes] = useState(0);
  const [car4likes, setcar4likes] = useState(0);

  useEffect(() => {
    if (car1likes === 4)
      console.log("This is the car of the year!!!");

    if (car2likes === 4) 
      console.log("This is the car of the year!!!");

    if (car3likes === 4)
      console.log("This is the car of the year!!!");

    if (car4likes === 4)
      console.log("This is the car of the year!!!");

      console.log(`Car 1: ${car1likes}`);
      console.log(`Car 2: ${car2likes}`);
      console.log(`Car 3: ${car3likes}`);
      console.log(`Car 4: ${car4likes}`);
  
  }, [car1likes, car3likes]);

  return(
    <div className="mainContainer" >
      <div className="containerLeft">
        <div className="firstCar">
          <h3>1. Mazda CX-5</h3>
          <img src="https://www.topgear.com/sites/default/files/cars-car/image/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg" style={{ width: 300, height: 200 }} alt="car1"/>
          <br/>
          <button onClick={() =>{            
            setcar1likes(car1likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar1likes(car1likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar1likes(car1likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car1likes}</h3>
        </div>
        <div className="secondCar">
          <h3>2. Honda Civic</h3>
          <img src="https://assets.whichcar.com.au/image/private/s--NcFpkg9L--/c_fill,f_auto,g_xy_center,q_auto:good,x_3080,y_1380/t_p_16x9/Edewar___211130_Honda_civic_VTi-LX_1627_hero.jpg" style={{ width: 300, height: 200 }} alt="car2"/>
          <br/>
          <button onClick={() =>{            
            setcar2likes(car2likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar2likes(car2likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar2likes(car2likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car2likes}</h3>
        </div>
      </div>
      <div className="containerRight">
        <div className="thirdCar">
          <h3>3. Toyota Corolla</h3>
          <img src="https://car-images.bauersecure.com/wp-images/12651/1752x1168/090-toyota-corolla-review-front-driving-blue.jpg?mode=max&quality=90&scale=down" style={{ width: 300, height: 200 }} alt="car3"/>
          <br/>
          <button onClick={() =>{            
            setcar3likes(car3likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar3likes(car3likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar3likes(car3likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car3likes}</h3>
        </div>
        <div className="fourthCar">
        <h3>4. Nissan Rogue</h3>
          <img src="https://media.ed.edmunds-media.com/nissan/rogue/2023/oem/2023_nissan_rogue_4dr-suv_platinum_fq_oem_1_1600.jpg" style={{ width: 300, height: 200 }} alt="car4"/>
          <br/>
          <button onClick={() =>{            
            setcar4likes(car4likes + 1)
          }}>Like</button>
          <button onClick={() =>{
            setcar4likes(car4likes - 1)
          }}>Dislike</button>
          <button onClick={()=>{
            setcar4likes(car4likes + 2)
          }}>SuperLike</button>
          <h3>Total: {car4likes}</h3>
        </div>
      </div>
    </div>
  )
}