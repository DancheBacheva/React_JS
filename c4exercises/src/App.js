//? ZA DOMASNA
//? Da napraime komponenta student koja kje ima ime/prezime / index
//? neka ovaa komponenta gi pokazuva studentite vo nekoja tabela i taa lista da se prakja kako props od app.js
//? da prakame pokraj listata uste edno property koe kje bide nekoj semestar i neka toj semestar se pokazuva na ekranot vo nekoj h1 element vednas posle tabelata

//? Da stavime PropTypes na listata od studenti i neka taa lista bide required, neka ima propTypes i za semestarot

//? Ako slucajno semestarot ne e praten, sekogas da se ispisuva tekstot zimski

import './App.css';
import { Semester } from './components/Semester';
import { Student } from './components/Student';

function App() {
  let students = [
    {name: "Janine", surname: "Jorie", index: 25356},
    {name: "Cécile", surname: "Garance", index: 25357},{name: "Danielle", surname: "Benoit", index: 25358},{name: "William", surname: "Olly", index: 25359},{name: "Frank", surname: "Astor", index: 25360},
  ]
  return (
    <div className="App">
      <h3>Students 2023</h3>
      <Student students={students}/>
      <Semester shouldShowSemester={1} />
    </div>
  );
}

export default App;
