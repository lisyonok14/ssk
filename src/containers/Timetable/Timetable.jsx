import Nav from "../../components/Nav/Nav";
import Footer from "../../components/footer/Footer";
import calendar from "../../assets/images/main/calendar.svg"
import oclock from "../../assets/images/timetable/clock.svg"
import "./Timetable.css"

function Timetable(){
    return(
        <>
        <div className="hd">
            <img src={calendar} alt="" />
            <h2>Расписание секций</h2>
        </div>

        <div className="tmtabl">
            <div className="tmtablHead">
                <div id="ocl"><img src={oclock} alt="" /></div>
                <div className="raspDays">
                    <p>ПН</p>
                    <p>ВТ</p>
                    <p>СР</p>
                    <p>ЧТ</p>
                    <p>ПТ</p>
                    <p>СБ</p>
                    <p>ВС</p>
                </div>
                
            </div>

            <div className="tb1">
                <div className="time">
                    <p>10:00</p>
                </div>

                <div className="cardTimetable1">
                    <div className="cards1">
                        <div className="card1">
                            <p>Спортивное программировние</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>13:00 - 12:30</p>
                            </div>
                            <p className="zal">Зал №4</p>
                            <p>Петров И.П.</p>
                        </div>

                        <div className="card1 plavan">
                            <p>Плавание</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>10:00 - 12:30</p>
                            </div>
                            <p className="zal">Бассейн</p>
                            <p>Матийчук И.С.</p>
                        </div>
                    </div>

                    <div className="cards2">
                        <div className="card1">
                            <p>Спортивное программировние</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>13:00 - 12:30</p>
                            </div>
                            <p className="zal">Зал №4</p>
                            <p>Петров И.П.</p>
                        </div>
                        <div className="card1 football">
                        <p>Футбол</p>
                        <div className="timee">
                            <img src={oclock} alt="" />
                            <p>13:00 - 12:30</p>
                        </div>
                        <p className="zal">Футбольная площадка</p>
                        <p>Петров И.П.</p>
                    </div>
                    <div className="card1 basket">
                        <p>Баскетбол</p>
                        <div className="timee">
                            <img src={oclock} alt="" />
                            <p>11:00 - 12:30</p>
                        </div>
                        <p className="zal">Зал №9</p>
                        <p>Петров И.П.</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="tb1">
                <div className="time">
                    <p>13:00</p>
                </div>

                <div className="cardTimetable1 ">
                    <div className="cards1" id="cards2">
                        <div className="card1 yoga">
                            <p>Йога</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>13:00 - 14:30</p>
                            </div>
                            <p className="zal">Зал №6</p>
                            <p>Новикова И.И.</p>
                        </div>

                        <div className="card1">
                            <p>Спортивное программировние</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>13:00 - 12:30</p>
                            </div>
                            <p className="zal">Зал №4</p>
                            <p>Петров И.П.</p>
                        </div>

                        <div className="card1 yoga">
                            <p>Йога</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>13:00 - 12:30</p>
                            </div>
                            <p className="zal">Зал №5</p>
                            <p>Новикова И.И.</p>
                        </div>
                    </div>

                    <div className="cards2">
                        <div className="card1 plavan">
                            <p>Плавание</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>13:00 - 15:30</p>
                            </div>
                            <p className="zal">Бассейн</p>
                            <p>Матийчук И.С.</p>
                        </div>
                    <div className="card1 yoga">
                        <p>Йога</p>
                        <div className="timee">
                            <img src={oclock} alt="" />
                            <p>13:00 - 15:30</p>
                        </div>
                        <p className="zal">Зал №6</p>
                        <p>Новикова И.И.</p>
                    </div>
                    </div>
                </div>
            </div>


            <div className="tb1">
                <div className="time">
                    <p>16:00</p>
                </div>

                <div className="cardTimetable1">
                    <div className="cards1">
                        <div className="card1 football">
                            <p>Футбол</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>16:00 - 17:30</p>
                            </div>
                            <p className="zal">Зал №4</p>
                            <p>Иванов С.А.</p>
                        </div>
                    </div>

                    <div className="cards2" id="cards3">
                        <div className="card1 basket">
                            <p>Баскетбол</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>17:00 - 19:30</p>
                            </div>
                            <p className="zal">Зал №5</p>
                            <p>Петров И.П.</p>
                        </div>
                        <div className="card1 football">
                            <p>Футбол</p>
                            <div className="timee">
                                <img src={oclock} alt="" />
                                <p>16:00 - 18:30</p>
                            </div>
                            <p className="zal">Футбольная площадка</p>
                            <p>Иванов С.А.</p>
                        </div>
                    <div className="card1 basket">
                        <p>Баскетбол</p>
                        <div className="timee">
                            <img src={oclock} alt="" />
                            <p>16:30 - 18:30</p>
                        </div>
                        <p className="zal">Зал №9</p>
                        <p>Петров И.П.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Timetable