import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
function App() {
    console.log("App rendered"); 
  return (
  
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title/>
       <Programs/>
     
      </div>
    </div>
  );  
}

export default App;
