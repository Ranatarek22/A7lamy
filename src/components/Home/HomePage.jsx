import React from "react";
import { NavbarSimple } from "../navbar/NavbarSimple";
import Hero from "./Hero";
import Queries from "./Queries";
import Dream from "./Dream";
import Questions from "./Questions";
import Articles from "./Articles";
import Footer from "./Footer";

const HomePage = () => {
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
      {/* <AdComponent /> */}
      <Queries
        parag="لضمان استمرارية المنصة في توفير تفسير الاحلام مجانا للجميع، وفرنا رابط دعم لمساعدتنا"
        btn="رابط الدعم"
        flag={false}
      />
      <Questions />
      <Articles />
      <Footer />
    </>
  );
};

export default HomePage;
