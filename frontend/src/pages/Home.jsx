import HelloBeyondMD from "../components/HelloBeyondMD";
import AdditionalHome from "../components/AdditionalHome";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const home = () => {

    return ( 
        <>
            <div className="flex flex-col justify-center items-center align-items border-solid border-4">
                <HelloBeyondMD />
                <Carousel />
            </div>

            <div className="flex flex-wrap flex-row gap-5 justify-center h-auto">
                <Menu />
            </div>

            <Footer />
        </>
    );
}
 
export default home;