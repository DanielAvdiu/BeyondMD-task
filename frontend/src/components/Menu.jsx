import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dictionary, notes, exchange, about } from '../assets';
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
        "image": exchange,
        "description": "Finance",
        "navigate": "/finance"
    }
]

const Menu = () => {

    {/* Using naviate to navigate between pages */}
    const navigate = useNavigate();


    {/* Whenever a menu option is clicked
        we navigate to the corresponding page.
    */}
    const handleClick = (destination) => {
        navigate(`${destination}`);
    }

    return (
        
        /* Here I have used a series of div elements with different className properties
            in order to get the desired design. The classname properties are self explanatory.
            The outermost div has a flex-wrap property that allows the children to wrap around and 
            make the inner divs appear at the center of the design.
        
        */
        <div className="flex flex-wrap gap-5 justify-center items-center h-auto">

            <div className="bg-white text-black h-auto w-[99] flex-col justify-center items-center text-2xl">

                <div className="py-4 text-4xl justify-center items-center text-center w-screen">

                    <div className="text-2xl flex justify-center text-center">
                        Choose From Services
                    </div>

                    {/* In this inner div I have used the map function on the array of options we can choose from.
                        This will represent the option of services we can choose from. 
                    */}
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

            {/* This small div is used for design and spacing */}
            <div className="flex flex-col">
                <div className="py-1">
                </div>
            </div>
        </div>
    );
}

export default Menu;