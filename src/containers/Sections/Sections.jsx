import "./Sections.css"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/footer/Footer";
import banner from "../../assets/images/sections/banner.svg"

import card1 from "../../assets/images/sections/card1.svg"
import card2 from "../../assets/images/sections/card2.svg"
import card3 from "../../assets/images/sections/card3.svg"
import card4 from "../../assets/images/sections/card4.svg"
import card5 from "../../assets/images/sections/card5.svg"

function Sections (){
    return(
        <>
            <div className="banner">
                <img style={{width:"100%" }} src={banner} alt="" />
            </div>

            <div className="txt">
                <h3>Выберите подходящую для себя спортивную секцию и присоединяйтесь к сообществу активных и целеустремленных студентов. Сделай первый шаг к своему успеху!</h3>
            </div>

            <div className="sectionsCards">
                <img className="sC" src={card1} alt="" />
                <img className="sC" src={card2} alt="" />
                <img className="sC" src={card3} alt="" />
                <img className="sC" src={card4} alt="" />
                <img className="sC" src={card5} alt="" />
            </div>
            <Footer/>

        </>
    )
}

export default Sections