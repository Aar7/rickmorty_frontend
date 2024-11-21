import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import QueryWrapper from "../QueryWrapper/QueryWrapper";

function Main({ char, loc, epi }) {
  console.log(char);
  return (
    <>
      <main className="main">
        <p className="main__welcome">Featured</p>
        <QueryWrapper>
          <ItemCard cardData={char} />
          <ItemCard cardData={loc} />
          <ItemCard cardData={epi} />
        </QueryWrapper>
      </main>
    </>
  );
}

export default Main;
