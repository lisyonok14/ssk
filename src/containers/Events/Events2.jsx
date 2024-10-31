import Nav from "../../components/Nav/Nav";
import Footer from "../../components/footer/Footer";
import calendar from "../../assets/images/main/calendar.svg"

import { Link, useLocation } from 'react-router-dom';
import "./Events.css";

const Events2 = () => {
    // const location = useLocation();
    return(
        <>
            <Nav/>
            <div className="eventHead">
                <div className="hd">
                    <img src={calendar} alt="" />
                    <h2>Мероприятия</h2>
                </div>
                <div className="btns">
                {/* <Link to="/Events"> */}
                {/* className={location.pathname === '/Events' ? 'active' : ''}ы */}
                    <button >Предстоящие</button>
                {/* </Link> */}

                {/* <Link to="/Events2"> */}
                {/* className={location.pathname === '/Events2' ? 'active' : ''} */}
                    <button >Прошедшие</button>
                    {/* </Link> */}
                </div>
                    <h3>Октябрь</h3>
                
            </div>
            <Footer/>

        </>
    )
}

export default Events2