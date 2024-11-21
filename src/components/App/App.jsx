import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          {/* If path="" show this component */}
          {/* <Route path="/characters" element={characters element} />
        <Route path="/locations" element={characters element} />
        <Route path="/episodes" element={characters element} /> */}
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
