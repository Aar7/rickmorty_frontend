import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Characters from "../Characters/Characters";
import Locations from "../Locations/Locations";
import Episodes from "../Episodes/Episodes";
import Footer from "../Footer/Footer";
import * as calls from "../../utils/ramApi";

function App() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    calls.getAllCharacters().then((res) => {
      console.log(res);
      setChars(res.results);
    });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<Characters chars={chars} />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
