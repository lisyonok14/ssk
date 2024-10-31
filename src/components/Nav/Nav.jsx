import "./Nav.css";
import React from 'react'
import Button from "../Button/Button";
import Logo from "../../assets/images/nav/logo.svg"
import pers from"../../assets/images/nav/pers.svg"
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom'
import Sections from "../../containers/Sections/Sections";
import Timetable from "../../containers/Timetable/Timetable";
import Events from "../../containers/Events/Events";
import Main from "../../containers/Main/Main";
import Login from "../../containers/Login/Login";
import FAQ from "../../containers/FAQ/FAQ";
import Documents from "../../containers/Documents/Documents";

function Nav ({ children }){
    
    return(
        <>

        <Router>
            <nav>
            <Link to="/" className="linkMain"><img style={{margin: "15% 0 0 0"}}src={Logo} alt="" /></Link>

                <div className="navigation">
                    <ul>
                        <li><Link to="/sections">Секции</Link></li>
                        <li><Link to="/timetable">Расписание</Link></li>
                        <li><Link to="/events">Мероприятия</Link></li>
                        <li><Link to="/documents">Документы</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
                <Link to="/login" className="my-button-link" >
                    <Button wdh="10%" color="#07A4FB" padding="0px 60px" imgSrc={pers}>Войти</Button>
                </Link>

            </nav>
            {children}
            <Routes>
                <Route path='//sections' exact Component={Sections} />
            </Routes> 

            <Routes>
                <Route path='//timetable' exact Component={Timetable} />
            </Routes>

            <Routes>
                <Route path='//events' exact Component={Events} />
            </Routes>

            <Routes>
                <Route path='/' exact Component={Main} />
            </Routes>

            <Routes>
                <Route path='/login' exact Component={Login} />
            </Routes>

            <Routes>
                <Route path='/faq' exact Component={FAQ} />
            </Routes>

            <Routes>
                <Route path='/documents' exact Component={Documents} />
            </Routes>

            </Router>
        </>
        
    )
}
export default Nav
