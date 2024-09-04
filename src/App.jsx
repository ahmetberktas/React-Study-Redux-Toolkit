import React from "react";
import Counter from "./pages/counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./pages/Crud";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Crud></Crud>}></Route>
          <Route path="/counter" element={<Counter></Counter>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
