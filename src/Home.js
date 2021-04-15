import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <h1>TSF BANKING SYSTEM</h1>
            <h3>Designed by Vaishali Parmar</h3>
            <Link className="text-link" to="/customers">
              <span className="btn">
                 <button className="b1">View All Customers</button>
              </span>
            </Link>
            <Link className="text-link" to="/transactionshistory">
              <span className="btn">
                <button className="b2">View Transactions</button>
              </span>
            </Link>
        </div>
    )
}

export default Home
