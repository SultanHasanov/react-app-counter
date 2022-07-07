import Button from "./Button";
import Player_1 from "./Player_1";
import Player_2 from "./Player_2";
import { useState } from 'react'
import Reset from "./Reset";
import './style.css'

function App() {

  const [count, setCount] = useState(5)
  const [count2, setCount2] = useState(5)


  return (
    <div className="App">
      <div className="bloc">
      <Player_1 count = {count} setCount = {setCount}/>
      <Player_2 count2 = {count2} setCount2 = {setCount2}/>
      </div>
      <Button setCount = {setCount} setCount2 = {setCount2}/>
      <Reset setCount = {setCount} setCount2 = {setCount2}/>
    </div>
  );
}

export default App;
