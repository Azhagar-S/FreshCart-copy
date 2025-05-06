import React from "react";
import Header from "./components/Header";
import Slides from "./components/Slides";
import Catogories from "./components/Catogories";
import Products from "./components/Products";
import SideNavbar from "./components/SideNavbar";
import { useState } from "react";

const App = () => {
  const [hambuger, setHamburger] = useState(false);

  return (
    <div>
      
        {hambuger && <SideNavbar hambuger={hambuger} setHamburger={setHamburger}/>}
        <Header hambuger={hambuger} setHamburger={setHamburger}/>
        <Slides />
        <Catogories />
        <Products />
      
    </div>
  );
};

export default App;
