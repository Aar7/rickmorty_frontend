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
  const [shownCards, setShownCards] = useState([]);
  const [charCards, setCharCards] = useState([]);
  // const [hideShowMore, setHideShowMore] = useState(false);
  let showThisManyCards = 3;

  useEffect(() => {
    console.log(chars);
    setCharCards(
      chars.map((item) => {
        return <ItemCard key={item.id} cardData={item} />;
      })
    );
  }, [chars]);

  useEffect(() => {
    if (chars.length < 20) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    setShownCards(charCards.slice(0, 3));
  }, [chars]);

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
