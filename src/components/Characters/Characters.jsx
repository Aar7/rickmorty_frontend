import { useContext, useEffect, useState } from "react";
import "./Characters.css";
import ItemCard from "../ItemCard/ItemCard";
import QueryWrapper from "../QueryWrapper/QueryWrapper";
import { NavigationContext } from "../../assets/contexts/NavigationContext";
import Preloader from "../Preloader/Preloader";

function Characters() {
  const navContext = useContext(NavigationContext);
  const { chars } = navContext;
  const [loading, setLoading] = useState(true);
  const [shownCards, setShownCards] = useState([]);
  const [charCards, setCharCards] = useState([]);
  const [hideShowMore, setHideShowMore] = useState(false);
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
    if (charCards) {
      setLoading(false);
    } else {
      setLoading(true);
    }
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
      <div className="characters">
        <p>Characters go here</p>
        {loading ? (
          <Preloader />
        ) : (
          <QueryWrapper
            handleClickShowMore={handleClickShowMore}
            hideShowMore={hideShowMore}
          >
            {shownCards}
          </QueryWrapper>
        )}
      </div>
    </>
  );
}

export default Characters;
