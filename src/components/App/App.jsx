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
import * as ram from "../../utils/ramApi";

function App() {
  const [chars, setChars] = useState([]);
  const [locs, setLocs] = useState([]);
  const [epis, setEpis] = useState([]);

  function getInitialData() {
    useEffect(() => {
      ram.getAllCharacters().then((res) => {
        // console.log(res);
        setChars(res.results);
      });
      ram.getAllLocations().then((res) => {
        setLocs(res.results);
      });
      ram.getAllEpisodes().then((res) => {
        setEpis(res.results);
      });
    }, []);
  }

  getInitialData();

  // useEffect(() => {
  //   console.log(chars);
  //   console.log(locs);
  //   console.log(epis);
  // }, [chars, locs, epis]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main char={chars[0]} loc={locs[0]} epi={epis[0]} />}
        />
        <Route path="/characters" element={<Characters chars={chars} />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
