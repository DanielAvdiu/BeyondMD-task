import React, { useState, useEffect } from "react";
import notes1 from "../assets/notes1.jpeg";
import blue from "../assets/blue.jpg";

const Notes = () => {

    const [notes, setNotes] = useState([{
        "title": "Note 1",
        "note": "This is the first note"
    },
    {
        "title": "Note 2",
        "note": "This is the second note"
    },
    {
        "title": "Note 3",
        "note": "This is the third note"
    }
    ]);


    useEffect(() => {
        const get_notes = async () => {
            await fetch("http://127.0.0.1:8000/playground/notes/").then(response => response.json()).then(data => { console.log(data) });
        };

        get_notes();

    }, []);

    return (
        <>
            <div className="flex flex-col bg-gradient-to-t sm:bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen">

                <div className="flex flex-col">

                    <div className="flex flex-col sm:flex-row">

                        <div style={{ backgroundImage: `url(${blue})`, backgroundSize: 'fit', backgroundPosition: 'center', minWidth: "300px" }} className="bg-static bg-no-repeat sm:h-screen w-screen flex flex-col justify-center items-center bg-white sm:w-1/3">
                            <h1 className="font-bold text-2xl text-white">Notes form</h1>

                            <form action="" className="flex flex-col">
                                <input className="rounded-lg shadow-lg hover:shadow-xl border-2 border-black border-solid my-2 py-2" type="text" placeholder="Title" />
                                <textarea className=" mb-3 mt-2 border-2 border-black border-solid shadow-lg hover:shadow-xl rounded-lg" name="note" id="note" cols="30" rows="10" placeholder="Note"></textarea>
                                <button className="border-2 border-black border-solid shadow-lg text-black hover:text-white hover:bg-purple-900 transition-all duration-200 rounded-lg my-2 bg-white">Add Note</button>
                            </form>
                        </div>

                        {/* Listing all the notes tha we will retrieve
                            from the django backend. Here we use the map function
                            so that after we have retrieved the notes from the backend,
                            we can list the notes, map each of them into a div.
                        */}
                        <div className="flex flex-col justify-center items-center w-screen">
                            <h1 className="font-bold text-xl">All the notes</h1>
                            <div>
                                {notes.map(note => {
                                    return (
                                        <div className="flex flex-col">
                                            <h1>{note.title}</h1>
                                            <p>{note.note}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>

            </div>
        </>
    );
}

export default Notes;