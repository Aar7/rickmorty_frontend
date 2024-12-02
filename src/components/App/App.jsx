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
import { CARD_DATA_INITIAL_STATE, SHOW_CARDS } from "../../utils/config";

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
  const [cardData, setCardData] = useState({});

  function handleClickShowMore(shownCards, itemCards, setShownCards) {
    if (shownCards.length < itemCards.length) {
      setShownCards(itemCards.slice(0, shownCards.length + SHOW_CARDS));
    }
    if (shownCards.length + SHOW_CARDS >= itemCards.length) {
      setHideShowMore(true);
    }
  }

  function handleClickCard(card) {
    setActiveModal("item-modal");
    setCardData(card);
  }

  function handleCloseModal() {
    setActiveModal("");
  }
  useEffect(() => {
    async function getInitialData() {
      try {
        const characterData = await ram.getAllCharacters();
        const locationData = await ram.getAllLocations();
        const episodeData = await ram.getAllEpisodes();

        setChars(characterData);
        setLocs(locationData);
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
          handleClickShowMore,
          activeModal,
          cardData,
          location,
        }}
      >
        <Header />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={loading ? <Preloader /> : <Main />} />
          <Route
            path="/characters"
            element={<Characters loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/locations"
            element={<Locations loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/episodes"
            element={<Episodes loading={loading} setLoading={setLoading} />}
          />
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
