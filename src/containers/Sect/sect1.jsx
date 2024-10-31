import "./Sect.css"
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/footer/Footer";
import banner from "../../assets/images/sections/sect/banner1.svg"
import peoples from "../../assets/images/sections/sect/user-group.svg"
import trener from "../../assets/images/sections/sect/trener.svg"

const Sect1 = () => {
    return(
        <>
            <Nav/>
            <div className="banner">
                <img style={{width:"100%" }} src={banner} alt="" />
            </div>

            <div className="txtS">
                <h3>"Футбол — это больше, чем спорт. Это командная работа, стратегия и борьба за победу. Если ты любишь скорость, точность и командный дух — присоединяйся к нашей секции! Не важно, новичок ты или опытный игрок, наши тренеры помогут раскрыть твой потенциал и достигнуть новых высот."</h3>
            </div>

            <div className="hd">
                <img src={peoples} alt="" />
                <h2>Тренеры</h2>
            </div>
            
            <div className="treners">
            <div className="cardMainn">
                <div className="cardMainnImg">
                    <img src={trener} alt="" />
                </div>
                <div className="cardMainnInfo">
                    <h2>Владимир Минеев - председатель АССК Россиии</h2>
                    <p>«В Саранске было круто, молодежно и очень атмосферно. Я познакомился с огромной семьей АССК России. Спасибо ребятам за то, что приняли в свою команду. Для меня символично, что это произошло в Саранске, ведь это один из моих любимых городов, он родной мне», – рассказывает Владимир Минеев.</p>
                </div>
            </div>

            <div className="cardMainn">
                <div className="cardMainnImg">
                    <img src={trener} alt="" />
                </div>
                <div className="cardMainnInfo">
                    <h2>Владимир Минеев - председатель АССК Россиии</h2>
                    <p>«В Саранске было круто, молодежно и очень атмосферно. Я познакомился с огромной семьей АССК России. Спасибо ребятам за то, что приняли в свою команду. Для меня символично, что это произошло в Саранске, ведь это один из моих любимых городов, он родной мне», – рассказывает Владимир Минеев.</p>
                </div>
            </div>
            </div>
            <div className="hd">
                {/* <img src={peoples} alt="" /> */}
                <h2>Тренеры</h2>
            </div>

            <div className="chavo">
                <div className="chavoshnik">
                    <h2>Для кого открыта эта секция?</h2>
                    <p>Секция открыта для всех студентов, независимо от уровня подготовки — от новичков до опытных игроков.</p>
                </div>
                <div className="chavoshnik">
                    <h2>Для кого открыта эта секция?</h2>
                    <p>Секция открыта для всех студентов, независимо от уровня подготовки — от новичков до опытных игроков.</p>
                </div>
                <div className="chavoshnik">
                    <h2>Для кого открыта эта секция?</h2>
                    <p>Секция открыта для всех студентов, независимо от уровня подготовки — от новичков до опытных игроков.</p>
                </div>
                <div className="chavoshnik">
                    <h2>Для кого открыта эта секция?</h2>
                    <p>Секция открыта для всех студентов, независимо от уровня подготовки — от новичков до опытных игроков.</p>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Sect1