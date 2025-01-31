import React from "react";
import Card from "./card";
import "./App.css";

function App() {
  let myObj={
    username:'chai',
    password:'123',
  }
  return (
    <>
      <Card  username='chai'/>  
      <Card  username='Marryam Abid' />
    </>
    
  );
}

export default App;
