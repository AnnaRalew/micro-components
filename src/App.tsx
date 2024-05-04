import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";

function App() {
  return (
   <>
       <Header title={"Header title"}/>
       <Body/>
       <Footer/>
   </>
  );
}

export default App;
