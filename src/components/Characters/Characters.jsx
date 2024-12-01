import { useContext, useEffect, useState } from "react";
import "./Characters.css";
import ItemCard from "../ItemCard/ItemCard";
import QueryWrapper from "../QueryWrapper/QueryWrapper";
import { NavigationContext } from "../../contexts/NavigationContext";
import Preloader from "../Preloader/Preloader";
import { SHOW_CARDS } from "../../utils/config";

function Characters() {
  const navContext = useContext(NavigationContext);
  const { chars, setChars, hideShowMore, setHideShowMore, location } =
    navContext;
  const [loading, setLoading] = useState(true);
  const [charCards, setCharCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);

  useEffect(() => {
    if (chars && chars.results) {
      // console.log(chars);
      const { results } = chars;
      // console.log(results);
      setCharCards(
        results.map((item) => {
          // console.log(item);
          return <ItemCard key={item.id} cardData={item} />;
        })
      );
      // setLoading(chars.results.length < 20);
      setLoading(chars.results.length == 0);
    }
  }, [chars]);

  useEffect(() => {
    setHideShowMore(false);
  }, [location]);

  useEffect(() => {
    setShownCards(charCards.slice(0, SHOW_CARDS));
  }, [charCards]);

  function handleClickShowMore() {
    if (shownCards.length < charCards.length) {
      setShownCards(charCards.slice(0, shownCards.length + SHOW_CARDS));
    }
    if (shownCards.length + SHOW_CARDS >= charCards.length) {
      setHideShowMore(true);
    }
  }

  return (
    <>
      <div className="characters">
        <QueryWrapper
          handleClickShowMore={handleClickShowMore}
          hideShowMore={hideShowMore}
          cardData={chars}
          setCardData={setChars}
        >
          {loading ? <Preloader /> : shownCards}
        </QueryWrapper>
      </div>
    </>
  );
}

export default Characters;
