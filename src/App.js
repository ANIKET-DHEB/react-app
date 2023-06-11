import {useState} from 'react';
import './App.css';

function App() {
  // const [likes,setLikes]=useState(false);
  

  // const likeHandler =()=>{
  //   setLikes(!likes);
  // }
  // return(
  //  <div className="App">
  //   <button onClick={likeHandler}>{likes ? 'unlike': 'like'}</button>

  //  </div>
  // );

  const [counter,setCounter]=useState(0);

  const clickHandler=()=>{
  setCounter(counter +1)
  }
  return(
    <div className="App">
   <h1> counter:{counter}</h1>
   <button onClick={clickHandler}>increase counter</button>
   </div>
  )

}

export default App;