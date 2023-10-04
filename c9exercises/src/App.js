import './App.css';
import { Navigation } from './components/Navigation';
import { Routes, Route } from "react-router-dom";
import { Homepage } from './components/Homepage';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/userdetails/:id" element={<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
