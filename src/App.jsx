import { useState } from "react";
import { NavbarSimple } from "./components/navbar/NavbarSimple.jsx";
import Hero from "./components/Home/Hero.jsx";
import Queries from "./components/Home/Queries.jsx";
import Dream from "./components/Home/Dream.jsx";

function App() {
  return (
    <>
      <NavbarSimple />
      <Hero />
      <Queries
        parag="
          احصل الآن على تفسير شامل وعميق لحلمك مقابل سعر رمزي وخلال ٢٤ ساعة."
        btn="التفسير الشامل"
        flag={true}
      />
      <Dream />
      <Queries
        parag="لضمان استمرارية المنصة في توفير تفسير الاحلام مجانا للجميع، وفرنا رابط دعم لمساعدتنا"
        btn="رابط الدعم"
        flag={false}
      />
    </>
  );
}

export default App;
