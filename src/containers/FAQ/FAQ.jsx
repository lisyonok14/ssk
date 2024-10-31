import "./FAQ.css";
import Footer from "../../components/footer/Footer";
import FAQimg from "../../assets/images/FAQ/9276424.jpg"
import question from "../../assets/images/FAQ/question-mark-circle.svg"


function FAQ(){
    return(
        <>
            <div className="FAQmain">
                <div className="FAQpic">
                    <img src={FAQimg} alt="" />
                </div>

                <div className="FAQinf">
                    <div className="aa">
                        <img src={question} style={{width: '45px'}} alt="" />
                        <h2>У вас остались вопросы?</h2>
                    </div>
                    
                    <p>Свяжитесь с поддержкой черег tg бота <span style={{color: '#07A4FB', cursor:'pointer'}}><a href="https://t.me/SSK_tg_bot">@SSK_tg_bot</a> </span>!</p>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default FAQ