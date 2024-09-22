import { useState } from "react";
import { NavbarSimple } from "./components/navbar/NavbarSimple.jsx";
import Hero from "./components/Home/Hero.jsx";
import Queries from "./components/Home/Queries.jsx";

function App() {
  return (
    <>
      <NavbarSimple />
      <Hero />
      <Queries />
    </>
  );
}

export default App;
