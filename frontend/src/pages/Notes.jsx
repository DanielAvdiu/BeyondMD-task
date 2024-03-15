import React, { useState, useEffect } from "react";
import notes1 from "../assets/notes1.jpeg";
import blue from "../assets/blue.jpg";
import newback from "../assets/newback.jpg";

const Notes = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");

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

    const get_notes = async () => {
        await fetch("http://127.0.0.1:8000/playground/notes/").then(response => response.json()).then(data => { setNotes(data); console.log(data) }).catch(error => console.log(error));
    };


    useEffect(() => {
        get_notes();

    }, []);

    const handleAdd = (event) => {

        event.preventDefault();

        const currentTime = new Date().getTime();
        const randomNumber = Math.floor(currentTime / 1000);

        const par1 = randomNumber;
        const par2 = title;
        const par3 = content;
        const par4 = currentTime;

        // const urlWithParams = `http://127.0.0.1:8000/playground/exchange/?par1=${par1}&par2=${par2}&par3=${par3}`;
        const urlWithParams = "http://127.0.0.1:8000/playground/add_note/";
        const add_note = async () => {

            const response = await fetch(urlWithParams, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ par1, par2, par3, par4 })
            });

            const data = await response.json();
            console.log(data);


        };
        add_note();

        setTitle("");
        setContent("");

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";

        window.alert("Note added successfully");

        setTimeout(() => {
            get_notes();
        }, 400);
        
    };


    const handleDelete = (e, id) => {
        e.preventDefault();

        const par1 = id;
        const urlWithParams = "http://127.0.0.1:8000/playground/delete_note/";

        const delete_note = async () => {
            const response = await fetch(urlWithParams, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ par1 })
            });

            const data = await response.json();
            console.log(data);
        }

        delete_note();
        setTimeout(() => {
            get_notes();
        }, 400);
    };

    useEffect(() => { console.log(title) }, [title]);

    useEffect(() => { console.log(content) }, [content]);


    return (
        <>
            <div className="flex flex-col bg-gradient-to-b sm:bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen">

                <div className="flex flex-col ">

                    <div className="flex flex-col sm:flex-row">

                        <div style={{ backgroundImage: `url(${newback})`, backgroundSize: 'fit', backgroundPosition: 'center', minWidth: "300px"}} className="bg-static bg-no-repeat sm:h-screen w-screen flex flex-col justify-center items-center bg-white sm:w-1/3">
                            <h1 className="font-bold text-2xl text-white">Notes form</h1>

                            <div className="flex flex-col">
                                <input id="title" onChange={(event) => setTitle(event.target.value)} className="rounded-lg shadow-lg hover:shadow-xl border-2 border-black border-solid my-2 py-2" type="text" placeholder="Title" /> 
                                <textarea id="content" onChange={(event) => setContent(event.target.value)} className=" mb-3 mt-2 border-2 border-black border-solid shadow-lg hover:shadow-xl rounded-lg" name="note" cols="30" rows="10" placeholder="Note"></textarea>
                                <button onClick={(e) => { handleAdd(e) }} className="border-2 border-black border-solid shadow-lg text-black hover:text-white hover:bg-purple-900 transition-all duration-200 rounded-lg my-2 bg-white">Add Note</button>
                            </div>
                        </div>

                        {/* Listing all the notes tha we will retrieve
                            from the django backend. Here we use the map function
                            so that after we have retrieved the notes from the backend,
                            we can list the notes, map each of them into a div.
                        */}
                        <div className="flex flex-col justify-start items-center w-screen">
                            <h1 className="font-bold text-xl">All the notes</h1>
                            <div style={{ maxHeight: "900px" }} className="overflow-auto scrollbar-hide">
                                {notes.map(note => {
                                    return (
                                        <div className="font-bold w-96 flex-col">
                                            <div className="rounded-lg hover:shadow-xl py-2 px-2 w-4/5 border-2 border-black border-solid mx-2 my-2 flex flex-col">
                                                <div className="flex flex-col">
                                                    <h1>{note.title}</h1>
                                                    <h1>{note.content}</h1>
                                                </div>

                                                <button onClick={(e) => { handleDelete(e, note.note_id) }} className="rounded-lg hover:bg-red-700 hover:text-white font-bold transition-all duration-200 px-2 ml-40 border-2 border-black border-solid"> Delete </button>

                                            </div>
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