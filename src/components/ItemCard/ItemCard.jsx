import "./ItemCard.css";

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
  let imgClasses = "itemcard__charImg itemcard__charImg_hidden";
  let itemCardImage;
  // This conditional will set the classes for the img tag in the returned markup.
  if (cardData.hasOwnProperty("species")) {
    // endpoint is character
    imgClasses = "itemcard__charImg";
    itemCardImage = cardData.image;
  } else if (cardData.hasOwnProperty("dimension")) {
    // endpoint is location
  } else {
    // endpoint is episode
  }
  return (
    <>
      <li className="itemcard">
        <img className={imgClasses} src={itemCardImage} />
        <div className="itemcard__cardinfo">
          <p className="itemcard__name">{`${cardData.name}`}</p>
        </div>
      </li>
    </>
  );
}

export default ItemCard;
