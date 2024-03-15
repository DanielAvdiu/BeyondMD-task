import React from "react";
import { useState, useEffect } from "react";

const StockList = () => {

    {/* stockList and stockArray are used for the stock information that is retrieved from the
        django backend. The stocklist is the whole set of information that is retrieved, stockArray
        is just the array that is part of the stockList.
*/}
    const [stockList, setStockList] = useState({});
    const [stockArray, setStockArray] = useState([{ symbol: "AAPL", name: "Apple Inc", exchange: "NASDAQ", currency: "USD", country: "USA", type: "Common Stock" }]);



    {/* useEffect here is used to make sure that whenever the page is refreshed or loaded
        an api call will be made to the django backend to get the stock information. After the 
        information is fetched it is set to the stockList and stockArray variables.    
*/}
    useEffect(() => {

        const fetchStockList = async () => {
            await fetch("http://127.0.0.1:8000/playground/stocks/").then(response => response.json()).then(data => { setStockList(data); setStockArray(data['data']) }).then(console.log(stockList));
        };


        setTimeout(() => {
            fetchStockList();
        }, 2000);

        console.log(stockList);
    }, []);


    return (
        <>
            {/*The two tables for stock list and mutual funds*/}
            <div className="flex flex-col justify-center items-center">

                <div className="shadow-xl mx-5 my-5" style={{ maxWidth: "900px", maxHeight: "800px" }}>
                    <div className="flex flex-row justify-center items-center">
                        <h1 className="font-bold text-2xl">Stock List</h1>
                    </div>

                    {/* This div has the option overflow-auto in order to make it a scrollable
                        element. I have used scrollbar-hide to hide the scrollbar.
                    */}
                    <div className="overflow-auto scrollbar-hide" style={{ maxHeight: "500px" }}>
                        <table className="table-auto justify-between pl-2 py-2 table-auto text-white bg-gray-700">
                            <thead>
                                <tr className="bg-black ">
                                    <th>Symbol</th>
                                    <th>Name</th>
                                    <th>Exchange</th>
                                    <th>Currency</th>
                                    <th>Country</th>
                                    <th>Type</th>
                                </tr>
                            </thead>

                            {stockArray.length > 0 && stockArray.map((item, index) => (
                                <tr key={index} className="text-sm border-solid border-2 border-black cursor-pointer hover:bg-black hover:shadow-xl font-semibold transition-all duration-300">
                                    <td className="text-blue-500">{item.symbol}</td>
                                    <td>{item.name}</td>
                                    <td>{item.exchange}</td>
                                    <td>{item.currency}</td>
                                    <td>{item.country}</td>
                                    <td>{item.type}</td>
                                </tr>
                            ))}

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StockList;