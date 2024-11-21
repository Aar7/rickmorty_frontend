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
import { NavigationContext } from "../../assets/contexts/NavigationContext";

function App() {
  const [chars, setChars] = useState([]);
  const [charInfoObj, setCharInfoObj] = useState({});
  const [locs, setLocs] = useState([]);
  const [locInfoObj, setLocInfoObj] = useState({});
  const [epis, setEpis] = useState([]);
  const [epiInfoObj, setEpiInfoObj] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getInitialData() {
      try {
        const characterData = await ram.getAllCharacters();
        const locationData = await ram.getAllLocations();
        const episodeData = await ram.getAllEpisodes();

        setChars(characterData.results);
        setCharInfoObj(characterData.info);
        setLocs(locationData.results);
        setLocInfoObj(locationData.info);
        setEpis(episodeData.results);
        setEpiInfoObj(episodeData.info);
        setLoading(false);
      } catch (error) {
        console.error("Requested data could not be retrieved", error);
        setLoading(false);
      }

      // ram.getAllCharacters().then((res) => {
      //   // console.log(res);
      //   setChars(res.results);
      //   setCharInfoObj(res.info);
      // });
      // ram.getAllLocations().then((res) => {
      //   setLocs(res.results);
      //   setLocInfoObj(res.info);
      // });
      // ram.getAllEpisodes().then((res) => {
      //   setEpis(res.results);
      //   setEpiInfoObj(res.info);
      // });
    }
    getInitialData();
  }, []);

  return (
    <>
      <NavigationContext.Provider value={charInfoObj}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <Preloader />
              ) : (
                <Main char={chars[0]} loc={locs[0]} epi={epis[0]} />
              )
            }
          />
          <Route path="/characters" element={<Characters chars={chars} />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
        <Footer />
      </NavigationContext.Provider>
    </>
  );
}

export default App;
