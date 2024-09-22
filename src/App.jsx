import { useState } from "react";
import { NavbarSimple } from "./components/navbar/NavbarSimple.jsx";
import Intro from "./components/Home/intro.jsx";
import Queries from "./components/Home/Queries.jsx";

function App() {
  return (
    <>
      <NavbarSimple />
      <Intro />
      <Queries />
    </>
  );
}

export default App;
