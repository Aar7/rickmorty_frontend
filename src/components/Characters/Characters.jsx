import { useContext, useEffect, useState } from "react";
import "./Characters.css";
import ItemCard from "../ItemCard/ItemCard";
import QueryWrapper from "../QueryWrapper/QueryWrapper";
import { NavigationContext } from "../../contexts/NavigationContext";
import Preloader from "../Preloader/Preloader";
import ItemModal from "../ItemModal/ItemModal";
import { SHOW_CARDS } from "../../utils/config";

function Characters() {
  const navContext = useContext(NavigationContext);
  const { chars, hideShowMore, setHideShowMore, activeModal } = navContext;
  const [loading, setLoading] = useState(true);
  const [charCards, setCharCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);
  // const [hideShowMore, setHideShowMore] = useState(false);

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
      setLoading(chars.results.length < 20);
    }
  }, [chars]);

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
    // console.log(shownCards.length);
    // console.log(charCards.length);
    // console.log(hideShowMore);
  }

  return (
    <>
      {/* {console.log(shownCards)} */}
      <div className="characters">
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
