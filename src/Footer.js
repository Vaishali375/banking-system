import React from 'react'
import "./Footer.css";

function Footer() {

    const currentDate= new Date();
    const year= currentDate.getFullYear();
    return (
        <div className="footer">
            <p>© {year} BY VAISHALI PARMAR </p>
        </div>
    )
}

export default Footer
