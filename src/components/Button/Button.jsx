import "./Button.css";
import React from 'react'
// import pers from "../../assets/images/nav/pers.svg";

const Button = ({ wdh, txtColor, color, padding, imgSrc, children }) => {
    return(
        <button style={{ 
            backgroundColor: color, 
            padding: padding, 
            color: txtColor, 
            width: wdh,
          }}>
        {imgSrc && <img src={imgSrc} alt="" />}
        {children}
      </button>
      
    )
}

export default Button;