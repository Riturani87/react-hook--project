import React, { useState } from "react";
import './index.css';



const App = () =>{
let Newtime= new Date().toLocaleTimeString();
const[Curtime,SetCtime]=useState(Newtime);
const updatedtime=()=>{
   
      Newtime= new Date().toLocaleTimeString();
      SetCtime(Newtime);
};
return(
 <>
    <div className="container">
    <h1 className="heading"> {Curtime} </h1>
   <button onClick={ updatedtime }className="btn">GET TIME  </button>
   </div>
 </>

    );
};
  
export default App;