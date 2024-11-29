import { useEffect, useState } from "react";
import cross from "../../assets/images/x.svg";
import "./ItemModal.css";
import InfoText from "../InfoText/InfoText";
import { CHAR_OBJ_KEYS, EPI_OBJ_KEYS, LOC_OBJ_KEYS } from "../../utils/config";

function ItemModal({
  activeModal,
  setActiveModal,
  handleCloseModal,
  cardData,
  location,
}) {
  const [objFields, setObjFields] = useState([]);
  // let objectFields = [];
  useEffect(() => {
    if (location.pathname == "/characters") {
      // objectFields = CHAR_OBJ_KEYS;
      setObjFields(CHAR_OBJ_KEYS);
    } else if (location.pathname == "/episodes") {
      // objectFields = EPI_OBJ_KEYS;
      setObjFields(EPI_OBJ_KEYS);
    } else if (location.pathname == "/locations") {
      // objectFields = LOC_OBJ_KEYS;
      setObjFields(LOC_OBJ_KEYS);
    }
  }, [location]);

  // console.log(objectFields);
  const [textItems, setTextItems] = useState([]);
  // console.log(activeModal);
  console.log(cardData);
  // const cardDataKeys = Object.keys(cardData);
  // console.log(cardDataKeys);
  // cardDataKeys.forEach((key) => {
  //   // console.log(`${key}: ${cardData[key]}`);
  //   console.log(key, cardData[key]);
  // });

  useEffect(() => {
    setTextItems(
      // CHAR_OBJ_KEYS.map((key) => {
      objFields.map((key) => {
        if (typeof cardData[key] == "object") {
          // console.log(key);
          const jsonObj = JSON.stringify(cardData[key]);
          // console.log(jsonObj);
          return <InfoText key={key} textKey={key} textData={jsonObj} />;
        }
        return <InfoText key={key} textKey={key} textData={cardData[key]} />;
      })
    );
  }, [cardData]);

  useEffect(() => {
    setActiveModal(!activeModal ? "" : activeModal);
    // console.log(textItems);
  }, [activeModal]);

  // useEffect(() => {
  //   if (cardData) {
  //     console.log(cardData);
  //   }
  // }, [cardData]);

  return (
    <>
      <div
        className={`item-modal-wrapper ${
          activeModal == "item-modal" ? "modal_open" : ""
        }`}
        onClick={() => {
          handleCloseModal();
        }}
      >
        <div
          className={`item-modal`}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <img
            className="item-modal__close-button"
            src={cross}
            onClick={() => {
              handleCloseModal();
              // console.log("close clicked");
            }}
          />
          <img className="item-modal__image" src={cardData?.image} />
          <div className="item-modal__info">{textItems}</div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;
