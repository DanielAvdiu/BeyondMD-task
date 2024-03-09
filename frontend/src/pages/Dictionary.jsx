import { useState, useEffect } from "react";
import books from "../assets/books.gif";
import { book_shelf } from "../assets";
import gifImage from "../assets/books.gif";

const Dictionary = () => {

    const [word, setWord] = useState("");
    const [data, setData] = useState({ 'list': [] });
    const [listdata, setListData] = useState([]);


    {/* Here is the function that will be called when the search button is clicked. 
      The django server will be running and then we make the call to the server to get the
      information about the word. The way that the server handles the calls is explained in the 
      django code for the server.
    */}

    const handleClick = async () => {
        {/* Here we make the call*/ }

        const apiUrl = 'http://127.0.0.1:8000/playground/definition/';

        // Construct the URL with query parameters
        const urlWithParams = `${apiUrl}?word=${word}`;

        const makeCall = async () => {
            await fetch(urlWithParams).then(response => response.json()).then(data => { setData(data); setListData(data['list']); console.log(data); console.log(listdata) });
            document.getElementById("gif").classList.toggle("hidden");
            document.getElementById("definitions").classList.toggle("hidden");
        };

        makeCall();
    };


    return (
        <>
                {/* Here is the dictionary page. There will be one search bar where you can
                    enter a word and then the definition and other information will be displayed.
                */}

                <div className="flex flex-col items-center justify-center">

                    <div style={{backgroundImage: `url(${book_shelf})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="bg-fixed bg-no-repeat backdrop-blur h-72 w-screen flex flex-col justify-center items-center py-5 w-screen space-y-4">
                        <h1 className="text-white font-semibold text-3xl"> Dictionary - Search for a word </h1>

                        {/* Here is the search bar. */}
                        <div className="backdrop-blur-50 flex flex-row items-center space-x-4">
                            {/* Here is the search bar input. */}
                            <div>
                                <input type="text" onChange={(event) => setWord(event.target.value)} className="py-3 px-4 rounded-lg" placeholder="Enter a word" />
                            </div>


                            {/* Here is the search bar button. */}
                            <div>
                                <button onClick={handleClick} className="rounded-lg bg-transparent bg-blue-500 hover:bg-white hover:text-black text-white font-semibold transition-all duration-300 py-2 px-4 border border-blue-500 hover:border-transparent rounded">Search</button>
                            </div>

                        </div>

                    </div>

                    {/* Here we map the definitions of the word that we searched for. 
                    The response of the django api call will be returned as a json object, which
                    contains the array of definitions for the word. We map through the array and display
                    the definitions with examples. 
                 */}
                    <div id="definitions" className="hidden bg-gray-400 flex flex-row justify-center items-center py-5">
                        <div className="space-y-4 flex flex-col justify-center items-center">
                            {data['list'].map((item, index) => (

                                <div className="flex flex-col justify-center items-center space-y-5 w-full" key={index}>

                                    <div className="hover:text-white hover:shadow-lg hover:bg-gray-500 transition-all duration-200 hover:border-gray-600 border-solid border-2 border-gray-200 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-2/3">

                                        {/* The definition and example for each case.*/}
                                        <div className="mb-2">
                                            <div className="text-gray-900 font-bold text-lg">Definition {index + 1}</div>
                                            <p className="text-base"> {item.definition}  </p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div id="gif" className="w-screen bg-gray-400 flex justify-center items-center">
                        <img src={gifImage} alt="" />
                    </div>

                    {/* Here we end the section for the definitions retrieved from calling the api*/}
                </div>
        </>
    );
}

export default Dictionary;