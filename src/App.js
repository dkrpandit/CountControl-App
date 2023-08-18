import React, { useState } from 'react'
import './App.css';
import './index.css';
// let a=0;

const App = () => {
  // const state = useState();
  const [a, seta] = useState(0);
  const Increment = () => {
    // console.log("clicked");
    // a=a+1;
    // console.log(a)
    // document.getElementById('head').innerHTML=a;
    seta(a + 1);
  }
  const Decrement = () => {
    seta(a -1);
  }
  const Reset = () => {
    seta(0);
  }
  

  return (
    <>
      <div className="container">
        <h1 id='head'>{a}</h1>
        <div className="buttons">
        <button className='button1' onClick={Increment}>Increment</button>
        <button className='button2' onClick={Decrement} >Decrement</button>
        <button className='button3' onClick={Reset} >Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
