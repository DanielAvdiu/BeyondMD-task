import React, {useState, useEffect} from "react";
import notes1 from "../assets/notes1.jpeg";

const Notes = () => {
    return (
        <>
            <div style={{backgroundImage: `url(${notes1})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="bg-fixed bg-no-repeat bg-cover">
                <h1>Notes Pages</h1>
            </div>
        </>
    );
}

export default Notes;