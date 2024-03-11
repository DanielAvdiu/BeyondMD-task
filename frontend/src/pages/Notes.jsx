import React, {useState, useEffect} from "react";
import notes1 from "../assets/notes1.jpeg";

const Notes = () => {
    useEffect(() => {
        
        const get_notes = async () => {
            await fetch("http://127.0.0.1:8000/playground/notes/").then(response => response.json()).then(data => { console.log(data) });
        };

        get_notes();

    }, []);

    return (
        <>
            <div style={{backgroundImage: `url(${notes1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="bg-fixed bg-no-repeat bg-cover">
                <div>
                    <input type="text" placeholder="title"/>
                    <input type="text" placeholder="content"/>
                    <button>Click here</button>
                </div>
            </div>

            <div></div>
        </>
    );
}

export default Notes;