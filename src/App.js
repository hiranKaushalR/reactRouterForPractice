import Head from "./Components/Head";
import Foot from "./Components/Foot";
import Home from "./Components/Home";
import Buy from "./Components/Buy";
import Borrow from "./Components/Borrow";
import About from "./Components/About";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);

  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy books={books}/>} />
        <Route path="/borrow" element={<Borrow books={books}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;