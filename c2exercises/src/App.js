import "./css/homework.css";
import { ClassExample } from "./components/ClassExample";
import { MyHobbies } from "./components/MyHobbies";
import { MyFavouriteHobby } from "./components/MyFavouriteHobby";
import { ImageOfHobby } from "./components/ImageOfHooby";

function App() {
  return (
    <div className="App">
      <MyHobbies />
      <MyFavouriteHobby />
      <ImageOfHobby />
      <ClassExample />
    </div>
  );
}

export default App;
