import React from "react";
import "./App.css";
const App=({name, e,r})=>{
  return (<div id="disp"> 
    <h1>
     Student Details
    </h1>
    <h2>Nmae:{name}</h2>
    <h2>
      Email id:{e}
    </h2>
    <h2>
      Roll Number:{r}
    </h2>
  </div>);
};
export default App;