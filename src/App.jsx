import React, { useState } from "react";
import './index.css';



const App = () =>{

const[count,setCount]=useState(0);
//[current data,updated data ] = initial data
const IncNum =()=>{
setCount(count+1);
};
return(
 <>
    <div className="container">
    <h1 className="heading"> {count} </h1>
   <button onClick={ IncNum }className="btn">click me </button>
   </div>
 </>

    );
};
  
export default App;