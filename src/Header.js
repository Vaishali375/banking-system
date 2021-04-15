import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
               <img alt="" className="header__logo" src="https://media-exp1.licdn.com/dms/image/C560BAQFgHU3sTF4LfQ/company-logo_200_200/0/1519895156650?e=2159024400&v=beta&t=1iqBaESC2l4UUW7JjEjq0R_HQhwRTaaqyQG1k46q4bs" />
            </Link>
            
            <h1>THE SPARKS FOUNDATION</h1>
            <div className="header__nav">
               <div className="header__options">
                 <Link to="/customers/create" className="text">
                    <span className="header__optionLineTwo">Create New</span> 
                 </Link> 
               </div>
               <div className="header__options">
                 <Link to="/transactionshistory" className="text">
                  <span className="header__optionLineTwo">View History</span>
                 </Link> 
               </div>
            </div>
         </div>
    )
}

export default Header
/*{window.location.pathname === "/customers" ? () : null}*/