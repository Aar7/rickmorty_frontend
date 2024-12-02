import { useContext, useEffect, useState } from "react";
import "./Locations.css";
import QueryWrapper from "../QueryWrapper/QueryWrapper";
import ItemCard from "../ItemCard/ItemCard";
import Preloader from "../Preloader/Preloader";
import { NavigationContext } from "../../contexts/NavigationContext";
import { SHOW_CARDS } from "../../utils/config";

function Locations() {
  const navContext = useContext(NavigationContext);
  const { locs, setLocs, hideShowMore, setHideShowMore, location } = navContext;

  const [loading, setLoading] = useState(true);
  const [locCards, setLocCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);

  useEffect(() => {
    if (locs && locs.results) {
      // console.log(locs);
      const { results } = locs;
      // console.log(results);
      setLocCards(
        results.map((item) => {
          // console.log(item);
          return <ItemCard key={item.id} cardData={item} />;
        })
      );
      // setLoading(chars.results.length < 20);
      setLoading(locs.results.length == 0);
    }
  }, [locs]);

  useEffect(() => {
    setHideShowMore(false);
  }, [location]);

  useEffect(() => {
    setShownCards(locCards.slice(0, SHOW_CARDS));
  }, [locCards]);

  function handleClickShowMore() {
    if (shownCards.length < locCards.length) {
      setShownCards(locCards.slice(0, shownCards.length + SHOW_CARDS));
    }
    if (shownCards.length + SHOW_CARDS >= locCards.length) {
      setHideShowMore(true);
    }
  }

  return (
    <>
      {/* <p>Locations go here</p> */}
      <div className="locations">
        <QueryWrapper
          handleClickShowMore={handleClickShowMore}
          hideShowMore={hideShowMore}
          cardData={locs}
          setCardData={setLocs}
        >
          {loading ? <Preloader /> : shownCards}
        </QueryWrapper>
      </div>
    </>
  );
}

export default Locations;
