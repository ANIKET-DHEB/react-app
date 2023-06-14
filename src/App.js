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

  const increase=()=>{
  setCounter(counter +1)
  }
  const decrease=()=>{
    setCounter(counter -1)
  }
  const reset=()=>{
    setCounter(0)
  }
  return(
    <div className="App">
   <h1> counter:{counter}</h1>
   <button class="btn1" onClick={increase}>increase button</button>
   <button class="btn2"onClick={decrease}>decrease button</button>
   <button class="btn3"onClick={reset}>reset button</button>
   </div>
 )

}
 

export default App;