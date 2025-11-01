import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Environment from "./components/Environment/Environment.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/Contact/Contact.jsx"
function App() {
    console.log("App rendered"); 
  return (
  
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title  subTitle='OUR PROGRAM' title='Explore Our Popular Programs'/>
       <Programs/>
     <About/>
      <Title  subTitle='Gallery' title='café environment Photos'/>
      </div>
      <Environment/>
        <Title  subTitle='Testimonials' title='what Student Says'/>
        <Testimonials/>
          <Title  subTitle='Contact Us ' title='Get in Touch'/>
          <Contact/>
    </div>
  );  
}

export default App;
