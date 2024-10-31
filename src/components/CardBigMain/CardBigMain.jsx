import "./CardBigMain.css";
import React from 'react'
import Main1 from "../../assets/images/main/cardMain1.svg";
import calendar from "../../assets/images/main/calendar.svg"
import Button from "../Button/Button";

const CardBigMain = () => {
    return(
        <div className="cardMain">
            <div className="cardMainImg">
                <img src={Main1} alt="" />
            </div>
            <div className="cardMainInfo">
                <h2>Владимир Минеев - председатель АССК Россиии</h2>
                <p>«В Саранске было круто, молодежно и очень атмосферно. Я познакомился с огромной семьей АССК России. Спасибо ребятам за то, что приняли в свою команду. Для меня символично, что это произошло в Саранске, ведь это один из моих любимых городов, он родной мне», – рассказывает Владимир Минеев.</p>
                <Button wdh="21%" txtColor="#282828" color="#EFEEED" padding="5px 10px" imgSrc={calendar}>16 октября 2024</Button>
            </div>
        </div>
    )
}
export default CardBigMain
