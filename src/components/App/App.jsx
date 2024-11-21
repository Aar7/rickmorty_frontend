import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Characters from "../Characters/Characters";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <Main> */}
      <Routes>
        {/* If path="" show this component */}
        {/* <Route path="/characters" element={characters element} />
        <Route path="/locations" element={characters element} />
        <Route path="/episodes" element={characters element} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
      <Preloader />
      {/* </Main> */}
      <Footer />
    </>
  );
}

export default App;
