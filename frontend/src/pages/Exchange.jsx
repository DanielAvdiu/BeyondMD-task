import Select from "react-dropdown-select";
import { useEffect, useState } from "react";
import crrencies from "../assets/crrencies.png";
import axios from "axios";
import { StockList } from "../components";

const Exchange = () => {

    const currencies = [
        {
            value: "SGD",
            label: "SDG"
        },
        {
            value: "MYR",
            label: "MYR"
        },
        {
            value: "EUR",
            label: "EUR"
        },
        {
            value: "USD",
            label: "USD"
        },
        {
            value: "AUD",
            label: "AUD"
        },
        {
            value: "JPY",
            label: "JPY"
        },
        {
            value: "CNH",
            label: "CNH"
        },
        {
            value: "HKD",
            label: "HKD"
        },
        {
            value: "CAD",
            label: "CAD"
        },
        {
            value: "INR",
            label: "INR"
        },
        {
            value: "DKK",
            label: "DKK"
        },
        {
            value: "GBP",
            label: "GBP"
        },
        {
            value: "RUB",
            label: "RUB"
        },
        {
            value: "NZD",
            label: "NZD"
        },
        {
            value: "MXN",
            label: "MXN"
        },
        {
            value: "IDR",
            label: "IDR"
        },
        {
            value: "TWD",
            label: "TWD"
        },
        {
            value: "THB",
            label: "THB"
        },
        {
            value: "VND",
            label: "VND"
        }
    ];

    const [result, setResult] = useState("Result");
    const [firstSelect, setFirstSelect] = useState("");
    const [secondSelect, setSecondSelect] = useState("");
    const [value, setValue] = useState(0);


    const handleConvert = () => {

        const par1 = firstSelect;
        const par2 = secondSelect;
        const par3 = value;

        // const urlWithParams = `http://127.0.0.1:8000/playground/exchange/?par1=${par1}&par2=${par2}&par3=${par3}`;
        const urlWithParams = "http://127.0.0.1:8000/playground/exchange/?par1=" + par1 + "&par2=" + par2 + "&par3=" + par3;
        const convert = async () => {
            await fetch(urlWithParams).then(response => response.json()).then(data => { setResult(data); console.log(data); });
        };

        convert();
    };

    useEffect(() => {
        console.log(firstSelect);
    }, [firstSelect]);

    useEffect(() => {
        console.log(secondSelect);
    }, [secondSelect]);

    useEffect(() => {

        const get_stock = async () => {
            await fetch('http://127.0.0.1:8000/playground/stocks/').then(response => response.json()).then(data => { console.log(data); });
        };

        get_stock();
    }, [])

    return (
        <>
            <div className="bg-gradient-to-b sm:bg-gradient-to-r from-blue-800 from-10% via-blue-600 via-30% to-blue-400 to-90% ">
                {/* The whole page */}
                <div className="w-screen flex flex-row sm:flex-row justify-center">


                    <div className="w-screen items-center justify-start border-solid flex flex-col md:flex-row mr-5 ml-5 mt-5 mb-5 size-full scrollbar-hide">

                        {/* This is the page where we can exchange currencies */}
                        <div className="sm:ml-20 bg-gradient-to-b from-gray-900 from-10% via-gray-800 via-30% to-gray-700 to-90% rounded-lg shadow-xl left-0 justify-left hover:shadow-xl space-y-4 sm:space-y-0 flex flex-col justify-center items-center border-2 border-black border-solid px-10 py-10 mr-5 ml-5 mt-5 mb-5">

                            <h1 className="text-white font-semibold text-3xl">Exchange Here</h1>

                            <div>
                                <h1 className="text-white font-semibold mb-4 text-2xl">Choose the Currencies</h1>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center items-center">

                                <Select
                                    id="firstSelect"
                                    className="fixed bg-white text-black font-bold"
                                    options={currencies}
                                    onChange={(selectedOptions) => {
                                        if (selectedOptions.length > 0) {
                                            setFirstSelect(selectedOptions[0].label);
                                        } else {
                                            setFirstSelect(''); // Handle case when no option is selected
                                        }
                                    }}
                                />

                                <div className="py-2 px-2">

                                </div>
                                <Select
                                    id="secondSelect"
                                    className="fixed bg-white text-black font-bold"
                                    options={currencies}
                                    onChange={(selectedOptions) => {
                                        if (selectedOptions.length > 0) {
                                            setSecondSelect(selectedOptions[0].label);
                                        } else {
                                            setSecondSelect(''); // Handle case when no option is selected
                                        }
                                    }}
                                />
                            </div>

                            <div>
                                <h1 className="text-white font-semibold mt-10 text-xl">Insert the value</h1>
                            </div>

                            <div>
                                <input type="text" placeholder="Value" value={value} className="text-black font-bold rounded-lg border-2 border-gray-500 border-solid mb-2 mx-10 py-2 px-2" onChange={(e) => setValue(e.target.value)} />
                            </div>

                            {/* When the button is clicked */}
                            <div className="flex justify-center items-center">
                                <button onClick={() => handleConvert()} className="bg-blue hover:bg-white text-white hover:text-black font-semibold transition-all duration-300 rounded-lg hover:shadow-lg rounded-lg mb-2 border-2 border-gray-500 border-solid px-4 py-2"> Convert </button>
                            </div>


                            {/* This is the section where the converted number will be displayed.
                        It is set to be disabled so that the user cannot interact with it.
                    */}
                            <div className="flex justify-center items-center">
                                <input id="result" className="rounded-lg border-2 border-gray-500 border-solid px-4 py-2" type="text" disabled placeholder={result} />
                            </div>

                        </div>

                        <div className="flex flex-row justify-center items-center w-full">
                            {/* This section will be used to get financial data from the api call */}
                            <div className="flex justify-right right-0">
                                <img src={crrencies} alt="currency" className="h-48 md:h-96 w-48 md:w-96" />
                            </div>
                        </div>

                    </div>

                </div>

                {/* Stock List */}
                <div className="">
                    <StockList />
                </div>
            </div>
        </>


    );
}

export default Exchange;