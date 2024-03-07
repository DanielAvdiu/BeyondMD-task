import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dictionary, notes, sports, exchange } from '../assets';
import { useNavigate } from 'react-router-dom';


{/* This represents the options we have for the
menu. Each of the options has an id, an image, a
description and a navigate property that will
redirect us to the corresponding page.
*/}

const options = [
    {
        "id": 1,
        "image": dictionary,
        "description": "Dictionary",
        "navigate": "/dictionary"
    },
    {
        "id": 2,
        "image": notes,
        "description": "Notes",
        "navigate": "/notes"
    },
    {
        "id": 3,
        "image": sports,
        "description": "Sports",
        "navigate": "/sports"
    },
    {
        "id": 4,
        "image": exchange,
        "description": "Exchange",
        "navigate": "/exchange"
    }

]

const Menu = () => {

    const navigate = useNavigate();

    const handleClick = (destination) => {
        navigate(`${destination}`);
    }

    return (
        <div className="flex flex-wrap gap-5 justify-center items-center h-auto border-2 border-black border-solid">

            <div className="bg-white text-black h-auto w-[99] flex-col justify-center items-center text-2xl border-2 border-black border-solid">

                <div className="py-4 text-4xl justify-center items-center text-center w-screen border-2 border-black border-solid">

                    <div className="text-2xl flex justify-center text-center">
                        Learn about your condition
                    </div>

                    <div className="p-4 flex flex-col sm:flex-row flex-wrap justify-center items-center">
                        {options.map((option) => (
                            <div onClick={() => handleClick(option.navigate)} className="hover:bg-gray-200 hover:shadow-2xl transition-all duration-200 cursor-pointer max-w-sm rounded overflow-hidden shadow-lg my-3 mx-2 scrollbar-hide" key={option.id} style={{ width: '300px' }}>
                                <img src={option.image} alt="eye drawing" style={{ width: '600px', height: '250px' }} className="cursor-pointer" />

                                <div className="px-6 py-4">
                                    <p className="text-gray-700 text-base">
                                        {option.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

            </div>

            <div className="flex flex-col">
                <div className="py-1">
                </div>
            </div>
        </div>
    );
}

export default Menu;