import "./CardSmallMain.css";
import React from 'react'
import Button from "../Button/Button";
import small1 from "../../assets/images/main/cardMain2.svg"
import small2 from "../../assets/images/main/cardMain3.svg"
import small3 from "../../assets/images/main/cardMain4.svg"
import calendar from "../../assets/images/main/calendar.svg"

const CardSmallMain = () => {
    return(
        <>
        <div className="cardSm">
            <div className="cardSmall">
                <div className="cardSmallImg">
                    <img src={small1} alt="" />
                </div>
                <div className="cardSmallInfo">
                    <h2>ПОБЕДИТЕЛИ ТУРНИРА «МАРАФОН ПОБЕДЫ»</h2>
                    <Button wdh="35%" txtColor="#282828" color="#EFEEED" padding="5px 10px" imgSrc={calendar}>16 октября 2024</Button>
                </div>
            </div>

            <div className="cardSmall">
                <div className="cardSmallImg">
                    <img src={small2} alt="" />
                </div>
                <div className="cardSmallInfo">
                    <h2 id="h2">СЛЕТ ТРЕНЕРОВ АССК РОССИИ</h2>
                    <Button wdh="40%" txtColor="#282828" color="#EFEEED" padding="5px 10px" imgSrc={calendar}>16 октября 2024</Button>
                </div>
            </div>

            <div className="cardSmall">
                <div className="cardSmallImg">
                    <img src={small3} alt="" />
                </div>
                <div className="cardSmallInfo">
                    <h2 id="h3">ЛЕТНИЕ ИГРЫ АССК РОССИИ</h2>
                    <Button wdh="40%" txtColor="#282828" color="#EFEEED" padding="5px 10px" imgSrc={calendar}>16 октября 2024</Button>
                </div>
            </div>
        </div>
        </>
    )
}
export default CardSmallMain
