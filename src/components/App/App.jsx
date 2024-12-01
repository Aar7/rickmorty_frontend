import { useEffect, useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Characters from "../Characters/Characters";
import Locations from "../Locations/Locations";
import Episodes from "../Episodes/Episodes";
import Footer from "../Footer/Footer";
import Credits from "../Credits/Credits";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as ram from "../../utils/ramApi";
import { NavigationContext } from "../../contexts/NavigationContext";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const location = useLocation();
  const [chars, setChars] = useState({
    info: { count: 0, pages: 0, next: null, prev: null },
    results: [],
  });
  const [locs, setLocs] = useState({
    info: { count: 0, pages: 0, next: null, prev: null },
    results: [],
  });
  const [epis, setEpis] = useState({
    info: { count: 0, pages: 0, next: null, prev: null },
    results: [],
  });
  const [loading, setLoading] = useState(true);
  const [hideShowMore, setHideShowMore] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [cardData, setCardData] = useState({
    // id: 0,
    // name: "",
    // status: "",
    // species: "",
    // type: "",
    // gender: "",
    // origin: {
    //   name: "",
    //   url: "",
    // },
    // location: {
    //   name: "",
    //   url: "",
    // },
    // image: "",
    // episode: [],
    // url: "",
    // created: "",
    // air_date: "",
  });

  function handleClickCard(card) {
    setActiveModal("item-modal");
    setCardData(card);
    // pass card data to this function from the ItemCard comp
    // ...then set the active modal to the item modal where the data will be populated there
  }

  function handleCloseModal() {
    setActiveModal("");
  }
  useEffect(() => {
    async function getInitialData() {
      try {
        const characterData = await ram.getAllCharacters();
        // const locationData = await ram.getAllLocations();
        const episodeData = await ram.getAllEpisodes();

        setChars(characterData);
        // setLocs(locationData);
        setEpis(episodeData);
        setLoading(false);
      } catch (error) {
        console.error("Requested data could not be retrieved", error);
        setLoading(false);
      }
    }
    getInitialData();
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    function handlePressEsc(event) {
      if (event.key == "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handlePressEsc);

    return () => {
      document.removeEventListener("keydown", handlePressEsc);
    };
  }, [activeModal]);

  useEffect(() => {
    // console.log(`Current Location: ${location}`);
    console.log(location);
  }, [location]);

  return (
    <>
      <NavigationContext.Provider
        value={{
          chars,
          setChars,
          locs,
          setLocs,
          epis,
          setEpis,
          hideShowMore,
          setHideShowMore,
          handleClickCard,
          activeModal,
          cardData,
          location,
        }}
      >
        <Header />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={loading ? <Preloader /> : <Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        <ItemModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          handleCloseModal={handleCloseModal}
          cardData={cardData}
          location={location}
        />
        <Footer />
      </NavigationContext.Provider>
    </>
  );
}

export default App;
