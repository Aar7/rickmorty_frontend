import { useEffect, useState } from "react";
import "./Characters.css";

function Characters({ chars }) {
  useEffect(() => {
    console.log(chars);
  }, [chars]);
  return (
    <>
      <p>Characters go here</p>

      <img src={`${chars[0].image}`} />
      <p>Name: {chars[0].name}</p>
      <img src={`${chars[1].image}`} />
      <p>Name: {chars[1].name}</p>
      <img src={`${chars[2].image}`} />
      <p>Name: {chars[2].name}</p>
      <img src={`${chars[3].image}`} />
      <p>Name: {chars[3].name}</p>
    </>
  );
}

export default Characters;
