import { useContext, useEffect, useState } from "react";
import "./Characters.css";
import ItemCard from "../ItemCard/ItemCard";
import QueryWrapper from "../QueryWrapper/QueryWrapper";
import { NavigationContext } from "../../assets/contexts/NavigationContext";
import Preloader from "../Preloader/Preloader";

function Characters() {
  const navContext = useContext(NavigationContext);
  const { chars, hideShowMore, setHideShowMore } = navContext;
  const [loading, setLoading] = useState(true);
  const [charCards, setCharCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);
  // const [hideShowMore, setHideShowMore] = useState(false);
  let showThisManyCards = 3;

  useEffect(() => {
    if (chars && chars.results) {
      console.log(chars);
      const { results } = chars;
      console.log(results);
      setCharCards(
        results.map((item) => {
          // console.log(item);
          return <ItemCard key={item.id} cardData={item} />;
        })
      );
      setLoading(chars.results.length < 20);
      // if (chars.results.length < 20) {
      //   setLoading(true);
      // } else {
      //   setLoading(false);
      // }
    }
  }, [chars]);

  useEffect(() => {
    setShownCards(charCards.slice(0, 3));
  }, [charCards]);

  function handleClickShowMore() {
    if (shownCards.length < charCards.length) {
      setShownCards(charCards.slice(0, shownCards.length + showThisManyCards));
    }
    if (shownCards.length + showThisManyCards >= charCards.length) {
      setHideShowMore(true);
    }
    // console.log(shownCards.length);
    // console.log(charCards.length);
    // console.log(hideShowMore);
  }

  return (
    <>
      {console.log(shownCards)}
      <div className="characters">
        <p>Characters go here</p>
        <QueryWrapper
          handleClickShowMore={handleClickShowMore}
          hideShowMore={hideShowMore}
        >
          {loading ? <Preloader /> : shownCards}
        </QueryWrapper>
      </div>
    </>
  );
}

export default Characters;
