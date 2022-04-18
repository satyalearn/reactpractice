
import { useState } from 'react';
import './App.css';

function App() {
  const time = new Date().toLocaleTimeString();
  let [ctime, setCtime] =useState(time);
  
  const updateTime =()=>{
    const time =new Date().toLocaleTimeString();
    setCtime(time)
  }
  
  setInterval(updateTime,1000)
  return(
    <div>
      <h1 style={{color:"blue"}}>{time}</h1>
      <button>h1</button>
    </div>
)
}

export default App;
