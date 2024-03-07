import HelloBeyondMD from "../components/HelloBeyondMD";
import AdditionalHome from "../components/AdditionalHome";
import Menu from "../components/Menu";


const home = () => {

    return ( 
        <>
            <div className="flex flex-col justify-center items-center align-items border-solid border-4">
                <HelloBeyondMD />
                <AdditionalHome />
            </div>

            <div className="flex flex-wrap flex-row gap-5 justify-center h-auto">
                <Menu />
            </div>
        </>
    );
}
 
export default home;