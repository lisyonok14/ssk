import "./Events.css";
import Nav from "../../components/Nav/Nav";
import calendar from "../../assets/images/main/calendar.svg"
import Footer from "../../components/footer/Footer";
// import { BrowserRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import ev1 from "../../assets/images/events/ev1.svg"
import ev2 from "../../assets/images/events/ev2.svg"

function Events(){
    // const location = useLocation();
    return(
       
        <>
            <div className="eventHead">
                <div className="hd">
                    <img src={calendar} alt="" />
                    <h2>Мероприятия</h2>
                </div>
                <div className="btns">
                {/* <Link to="./Events"> */}
                    <button>Предстоящие</button>
                {/* </Link> */}

                {/* <Link to="./Events2"> */}
                    <button>Прошедшие</button>
                    {/* </Link> */}
                </div>
                    <h3>Октябрь</h3>
                
            </div>

            <div className="cardMain" id="evv">
                <div className="cardMainImg">
                    <img src={ev1} alt="" />
                </div>
                <div className="cardMainInfo">
                    <button id="bt1">25 октября 2024</button>
                    <h2>Турнир по мини-футболу среди факультетов</h2>
                    <div className="kat">
                        <p>Категория: <span style={{color: "#07A4FB"}}>Внутривузовский</span></p>
                        <p>Возрастные ограничения: <span style={{color: "#07A4FB"}}>18-30 лет</span></p>
                    </div>
                    <button id="bt2">Зарегистрироваться</button>
                </div>
            </div>
            <div className="cardMain" id="ev">
                <div className="cardMainImg">
                    <img src={ev2} alt="" />
                </div>
                <div className="cardMainInfo">
                    <button id="bt1">30 октября 2024</button>
                    <h2>Чемпионат по шахматам</h2>
                    <div className="kat">
                        <p>Категория: <span style={{color: "#07A4FB"}}>Региональный</span></p>
                        <p>Возрастные ограничения: <span style={{color: "#07A4FB"}}>18+ лет</span></p>
                    </div>
                    <button id="bt2">Зарегистрироваться</button>
                </div>
            </div>
    

            <Footer/>

        </>
    )
}

export default Events