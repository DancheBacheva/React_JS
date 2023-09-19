//?Za domasna:
//?Da napravime komponenta koja kje bide slicna na Movie.js komponentata.
//?Da imame 4 sliki od avtomobili i pod sekoja slika da imame kopce like sto bi znacelo plus 1 glas za toj avtomobil. Preku useEffect napravete da koga nekoj avtomobil kje stigne do 4 glasa se ispecati vo konzola deka e avtomobil na godinata.
//?BONUS: Dokolku imate vreme
//?Pod sekoj avtomobil da ima tri kopcinja ednoto like, drugoto dislike (-1 glass) i superLike (+2 glasa) i preku useEffect da se naprai da vo konzola se pecatat glasovite od site avtomobili no samo koga se glasa za 1 i 3 tiot avtomobil

import './App.css';
import { useState, useEffect } from "react";
import { Car } from './components/Car';

function App() {
  return (
    <div className="App">
      <h1>Vote for car of the year</h1>
      <Car />
    </div>
  );
}

export default App;
