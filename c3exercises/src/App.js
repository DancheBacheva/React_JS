import './App.css';
import { Comments } from './components/Comments';

function App() {
  let comments = [
    {id: "1", author: "Jim", text: "In seeing a sample of lorem ipsum, his interest was piqued by consectetur"},
    {id: "2", author: "John", text: "In particular, the garbled words of lorem ipsum bear an unmistakable resemblance "},
    {id: "3", author: "Jessica", text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet"},
    {id: "4", author: "Hellen", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
  ]

  return (
    <div className="App">
      <Comments comments={comments}/>
    </div>
  );
}

export default App;
