import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";

export default function App() {
  return <BrowserRouter> 
  <Header />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/sign-in' element={<Signin/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
   

 
  </Routes>
  
  
  
  </BrowserRouter>;
}
