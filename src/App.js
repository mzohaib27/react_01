
import { render } from '@testing-library/react';
import './App.css';
import Users from './Components/Users';
import React , {useEffect,useState} from 'react';
import ParentCmp from './Components/ParentCmp';
import { Button } from 'react-bootstrap';
import ArrayListing from './Components/ArrayListing';





function App() {
const[state,setState]=useState(0)
const[name,setName]=useState("M")
  useEffect(()=>{
    console.log("I am UseEffect due to state")
  },[state])
  
  function updt(){
    setName('Zohaib')
  }
  
  return (
    <div className="App">
      {/* <Users data='name:zohaib'/>
      <h1>Count : {state}</h1>
      <Button variant="primary"  onClick={()=>{setState(state+1)}}>Update State</Button>
      <br />
      <h1>Name : {name}</h1>
      <Button variant="primary" onClick={updt}>Update State</Button>
      <ParentCmp />
      <Users data = {state} data1 = {name}/> */}
      <ArrayListing />
      

    </div>
  );
  
}

export default App;
