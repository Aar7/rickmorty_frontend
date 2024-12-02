import "./ItemCard.css";
import { CLASSES } from "../../utils/config";
import { useContext } from "react";
import { NavigationContext } from "../../contexts/NavigationContext";

function ItemCard({ cardData }) {
  /*
  The various objects returned by the character, location, and episode endpoints
  vary in significant ways. To determine the endpoint that 'cardData' was retrieved from,
  the hasOwnProperty() method will be used to check for unique fields that exist in each endpoint.
  Character: 'species'
  Location: 'dimension'
  Episode: 'air_date'

  This is necessary because only the character endpoint has an image for the character,
  which I want to show.
  */
  // console.log("CardData: ", cardData);
  // const { location } = useContext(NavigationContext);
  const { handleClickCard } = useContext(NavigationContext);

  let imgClasses = CLASSES.img;
  let itemCardImage;
  // This conditional will set the classes for the img tag in the returned markup.
  // if ((location.pathname = "/characters")) {
  if (cardData.hasOwnProperty("species")) {
    imgClasses = "itemcard__charImg";
    itemCardImage = cardData.image;
  }
  return (
    <>
      <li
        className="itemcard"
        onClick={() => {
          // console.log(cardData);
          handleClickCard(cardData);
        }}
      >
        <img className={imgClasses} src={itemCardImage} />
        <div className="itemcard__cardinfo">
          <p className="itemcard__name">{`${cardData.name}`}</p>
        </div>
      </li>
    </>
  );
}

export default ItemCard;
