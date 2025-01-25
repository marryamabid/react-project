import { useState } from 'react'


import './App.css'

function App() {
  let [count,setCount]=useState(1)//default value in useState
  // let count =1;
  // if(count<21 )
    function addCount() {
      console.log(count);
      if(count<20 )
      setCount(count+1)
    }
  
  let reduce=count;
  // if(count>0 )
    function reduceCount() {
      if(count>0 )
      setCount(count-1)
    }
 

  return (
  
 
  <>
  <h1>here is the counter app</h1> 
  <button onClick={addCount}>Add Count : {count}</button>
  <br/>
  <button onClick={reduceCount}>Reduce Count  {reduce}</button>
  <h2>the final count is  {count}</h2>
  </>

  )
}

export default App
