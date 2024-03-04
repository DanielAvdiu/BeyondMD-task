import HelloBeyondMD from "../components/HelloBeyondMD";
import AdditionalHome from "../components/AdditionalHome";
import SearchWord from "../components/SearchWord";


const home = () => {

    return ( 
        <>
            <div className="flex flex-col justify-center items-center align-items border-solid border-4">
                <HelloBeyondMD />
                <AdditionalHome />
                <SearchWord />
            </div>
        </>
    );
}
 
export default home;