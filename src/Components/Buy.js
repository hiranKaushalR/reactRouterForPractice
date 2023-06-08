import React from "react";

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
        <button>Buy Now</button>
      </div>
    </div>
  ));

  return <div>{mappedbooks}</div>;
}

export default Buy;