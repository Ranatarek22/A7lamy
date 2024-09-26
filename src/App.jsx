import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import { NavbarSimple } from "./components/navbar/NavbarSimple";
import Policies from "./components/navbar/Policies";
import Footer from "./components/Home/Footer";
import PrivacyPolicy from "./components/navbar/PrivacyPolicy";

function App() {
  return (
    <>
      <NavbarSimple />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
