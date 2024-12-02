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
  const [textItems, setTextItems] = useState([]);

  useEffect(() => {
    if (location.pathname == "/characters") {
      setObjFields(CHAR_OBJ_KEYS);
    } else if (location.pathname == "/episodes") {
      setObjFields(EPI_OBJ_KEYS);
    } else if (location.pathname == "/locations") {
      setObjFields(LOC_OBJ_KEYS);
    }
  }, []);

  useEffect(() => {
    if (location.pathname == "/characters") {
      setObjFields(CHAR_OBJ_KEYS);
    } else if (location.pathname == "/episodes") {
      setObjFields(EPI_OBJ_KEYS);
    } else if (location.pathname == "/locations") {
      setObjFields(LOC_OBJ_KEYS);
    }
  }, [location]);

  // console.log(cardData);

  useEffect(() => {
    if (objFields === undefined || cardData === undefined) {
      console.log("Data undefined");
    } else {
      setTextItems(
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
    }
  }, [cardData, objFields]);

  useEffect(() => {
    setActiveModal(!activeModal ? "" : activeModal);
    // console.log(textItems);
  }, [activeModal]);

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
