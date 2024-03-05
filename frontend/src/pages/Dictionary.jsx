import { useState, useEffect } from "react";

const Dictionary = () => {

    const [word, setWord] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        console.log("The word is: ", word);
    }, [word]);

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
            await fetch(urlWithParams).then(response => response.json()).then(data => { setData(data); console.log(data); });
        };

        makeCall();
    };

    return (
        <>

            {/* Here is the dictionary page. There will be one search bar where you can
           enter a word and then the definition and other information will be displayed.
            */}

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center border-solid border-4 py-5 w-screen">
                    <h1 className="text-3xl"> Dictionary - Search for a word </h1>

                    {/* Here is the search bar. */}
                    <div className="flex flex-row items-center space-x-4">
                        {/* Here is the search bar input. */}
                        <div>
                            <input type="text" onChange={(event) => setWord(event.target.value)} className="border-solid border-4 py-2 px-4" placeholder="Enter a word" />
                        </div>


                        {/* Here is the search bar button. */}
                        <div>
                            <button onClick={handleClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Search</button>
                        </div>

                    </div>

                </div>

                <div className="flex flex-row justify-center border-solid border-4 py-5 w-screen">
                    <h1 className="text-3xl"> Result </h1>
                </div>
            </div>
        </>
    );
}

export default Dictionary;