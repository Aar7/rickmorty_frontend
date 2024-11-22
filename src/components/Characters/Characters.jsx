import { useContext, useEffect, useState } from "react";
import "./Characters.css";
import ItemCard from "../ItemCard/ItemCard";
import QueryWrapper from "../QueryWrapper/QueryWrapper";
import { NavigationContext } from "../../assets/contexts/NavigationContext";

function Characters() {
  const navContext = useContext(NavigationContext);
  const { chars } = navContext;

  const characterArray = chars.map((item) => {
    return <ItemCard key={item.id} cardData={item} />;
  });
  return (
    <>
      <div className="characters">
        <p>Characters go here</p>
        <QueryWrapper>{characterArray}</QueryWrapper>
      </div>
    </>
  );
}

export default Characters;
