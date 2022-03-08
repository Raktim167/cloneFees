import React from "react";
import './App.css';
import logo from "./images/coindhanLogo.jpg";
import Table from "./components/Table";

function App() {

  return (
    <div className="App">
     
      <span>
        <img src={logo} style={{ maxHeight: "48px",maxWidth: "px", float: "left"}} />
      </span>
      <Table 
      />
  
    </div>
  );
}

export default App;
