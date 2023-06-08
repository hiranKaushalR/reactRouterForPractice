import React from "react";
import { Link } from "react-router-dom";
import './Style.css'

function Home () {
    return (
        <div className="home">
            <h1>Is there a book You need to Read</h1>
            <button>
                <Link className="home--botton" to='/buy'>Buy Your Book</Link>
            </button>
            <h1>Don't have enough money</h1>
            <button>
                <Link className="home--botton" to='/borrow'>Borrow Your Book</Link>
            </button>
        </div>
    )
}
export default Home
