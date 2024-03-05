const HelloBeyondMD = () => {
    return (
        <>
            {/* Here is the section that holds the div for Hello BeyondMD and the button
                to download the resume. Both of these requirements are mentioned in the email that
                I received from BeyondMD.
            */}
            <div className="border-2 border-black border-solid flex flex-row justify-center items-center">
                <div className="border-solid border-2 flex justify-center items-center py-5">
                    <h1 className="text-4xl">Hello BeyondMD!</h1>
                </div>


            </div>

            <div className="flex flex-col justify-center items-center border-2 border-gray-500 border-solid py-5 space-y-5">

                {/* In this seciton I have the button that will let you
                    download the resume in PDF format. The call will be made to
                    the backend, Django in this case, and the response will be the
                    pdf format of my resume.
                */}


                <div className="">
                    <h1 className="text-xl">Download Resume</h1>
                </div>

                <div className="">
                    <button className="border-red-600 border-2 border-solid hover:shadow-2xl hover:bg-red-600 hover:text-white px-4 py-4 rounded-md border-red-600 hover:border-none">PDF Resume</button>
                </div>

            </div>
        </>
    );
}

export default HelloBeyondMD;