import { useContext, useState, useEffect } from "react";
import "./Episodes.css";
import { NavigationContext } from "../../contexts/NavigationContext";
import { SHOW_CARDS } from "../../utils/config";
import Preloader from "../Preloader/Preloader";
import QueryWrapper from "../QueryWrapper/QueryWrapper";
import ItemCard from "../ItemCard/ItemCard";

function Episodes() {
  const navContext = useContext(NavigationContext);

  const { epis, setEpis, hideShowMore, setHideShowMore, location } = navContext;

  const [loading, setLoading] = useState(true);
  const [epiCards, setEpiCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);

  useEffect(() => {
    if (epis && epis.results) {
      // console.log(epis);
      const { results } = epis;
      // console.log(results);
      setEpiCards(
        results.map((item) => {
          // console.log(item);
          return <ItemCard key={item.id} cardData={item} />;
        })
      );
      // setLoading(epis.results.length < 20);
      setLoading(epis.results.length == 0);
    }
    // console.log(epis);
  }, [epis]);

  useEffect(() => {
    setHideShowMore(false);
  }, [location]);

  useEffect(() => {
    setShownCards(epiCards.slice(0, SHOW_CARDS));
  }, [epiCards]);

  function handleClickShowMore() {
    if (shownCards.length < epiCards.length) {
      setShownCards(epiCards.slice(0, shownCards.length + SHOW_CARDS));
    }
    if (shownCards.length + SHOW_CARDS >= epiCards.length) {
      setHideShowMore(true);
    }
  }

  return (
    <>
      <div className="characters">
        <QueryWrapper
          handleClickShowMore={handleClickShowMore}
          hideShowMore={hideShowMore}
          cardData={epis}
          setCardData={setEpis}
        >
          {loading ? <Preloader /> : shownCards}
        </QueryWrapper>
      </div>
    </>
  );
}

export default Episodes;
