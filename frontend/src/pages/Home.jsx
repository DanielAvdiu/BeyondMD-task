import HelloBeyondMD from "../components/HelloBeyondMD";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import landscape from "../assets/landscape.jpg";    

const home = () => {


    return (
        <>
            {/* This is the Home page. It includes multiple components. */}
            <div style={{backgroundImage: `url(${landscape})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="h-96 w-full bg-no-repeat bg-fixed flex flex-col justify-center items-center align-items">
                <HelloBeyondMD />
            </div>

            <div className="flex flex-wrap flex-row gap-5 justify-center h-auto">
                <Menu />
            </div>

            <Footer />
        </>
    );
}

export default home;