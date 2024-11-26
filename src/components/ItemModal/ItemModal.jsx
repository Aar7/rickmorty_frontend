import { useEffect } from "react";
import cross from "../../assets/images/x.svg";
import "./ItemModal.css";

function ItemModal({
  activeModal,
  setActiveModal,
  handleCloseModal,
  cardData,
}) {
  console.log(activeModal);

  useEffect(() => {
    setActiveModal(!activeModal ? "" : activeModal);
  }, [activeModal]);

  useEffect(() => {
    if (cardData) {
      console.log(cardData);
    }
  }, [cardData]);

  return (
    <>
      <div
        className={`item-modal-wrapper ${
          activeModal == "item-modal" ? "modal_open" : ""
        }`}
      >
        <div className={`item-modal`}>
          <img
            className="item-modal__close-button"
            src={cross}
            onClick={() => {
              handleCloseModal();
              // console.log("close clicked");
            }}
          />
          <img className="item-modal__image" src={cardData?.image} />
          <div className="item-modal__info">
            <p className="item-modal__subtext">
              <span className="item-modal__subtext__head">Name:</span>{" "}
              {cardData?.name}
            </p>
            <p className="item-modal__subtext">
              <span className="item-modal__subtext__head">Status:</span>{" "}
              {cardData?.status}
            </p>
            <p className="item-modal__subtext">
              <span className="item-modal__subtext__head">Species:</span>{" "}
              {cardData?.species}
            </p>
            <p className="item-modal__subtext">
              <span className="item-modal__subtext__head">Type:</span>{" "}
              {cardData?.type}
            </p>
            <p className="item-modal__subtext">
              <span className="item-modal__subtext__head">Gender:</span>{" "}
              {cardData?.gender}
            </p>
            {/* <p className="item-modal__">{cardData.}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;
