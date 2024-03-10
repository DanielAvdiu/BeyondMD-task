import React from "react";
import { useState, useEffect } from "react";

const StockList = () => {
    const [stockList, setStockList] = useState({});
    const [stockArray, setStockArray] = useState([{symbol: "AAPL", name: "Apple Inc", exchange: "NASDAQ", currency: "USD", country: "USA", type: "Common Stock"}]);

    useEffect(() => {

        const fetchStockList = async () => {
            await fetch("http://127.0.0.1:8000/playground/stocks/").then(response => response.json()).then(data => { setStockList(data); setStockArray(data['data']) }).then(console.log(stockList));
        };


        setTimeout(() => {
            fetchStockList();
        }, 1000);
        console.log(stockList);
    }, []);


    return (
        <>
            {/*The two tables for stock list and mutual funds*/}
            <div className="flex flex-col justify-center items-center">

                <div className="shadow-xl mx-5 my-5" style={{maxWidth: "900px", maxHeight: "800px"}}>
                    <div className="flex flex-row justify-center items-center">
                        <h1 className="font-bold text-2xl">Stock List</h1>
                    </div>

                    <div className="overflow-auto scrollbar-hide" style={{ maxHeight: "500px"}}>
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
                            
                            {stockArray.map((item, index) => (

                                <tr className="text-sm border-solid border-2 border-black cursor-pointer hover:bg-black hover:shadow-xl font-semibold transition-all duration-300">
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