import Nav from "../../components/Nav/Nav";
import CardBigMain from "../../components/CardBigMain/CardBigMain";
import CardSmallMain from "../../components/CardSmallMain/CardSmallMain";
import Footer from "../../components/footer/Footer";
import banner from "../../assets/images/main/banner.svg"

const Main = () => {
    return(
        <>
        <div className="banner">
            <img style={{width:"100%" }} src={banner} alt="" />
        </div>
        <CardBigMain/>
        <CardSmallMain/>
        <Footer/>
        </>
    )
}

export default Main