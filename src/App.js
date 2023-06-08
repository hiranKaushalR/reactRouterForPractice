import Head from "./Components/Head";
import Foot from "./Components/Foot";
import Home from "./Components/Home";
import Buy from "./Components/Buy";
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

  console.log(books);


  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy books={books}/>} />
        <Route path="/borrow" element={<h1>Borrow Books</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
