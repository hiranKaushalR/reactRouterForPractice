import React from "react";
import { Link } from "react-router-dom";
import './Style.css';

function Buy(props) {
  const mappedbooks = props.books.map((book) => (
    <div key={book.isbn13} className="buy">
      <div className="buy--image">
        <img src={book.image} alt={book.title} />
      </div>
      <div>
        <p>title: {book.title}</p>
        <p>ISBN: {book.isbn13}</p>
        <p>{book.price}</p>
        <Link to={`buy/${book.isbn13}`}><button>Buy Now</button></Link>
      </div>
    </div>
  ));

  return <div>{mappedbooks}</div>;
}

export default Buy;