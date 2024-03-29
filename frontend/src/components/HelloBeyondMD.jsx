import axios from "axios";
import lake from "../assets/lake.jpg";

const HelloBeyondMD = () => {

    const handleClick = () => {
        //This is the function that will be called when the download button is clicked.
        //It will make a call to the backend (django) and the response will be 

        let fileDownload = require('js-file-download');

        const handlePDFDownload = async () => {
            await axios.get('http://127.0.0.1:8000/playground/download/', {
                responseType: 'blob',
            }).then((response) => {
                fileDownload(response.data, 'Daniel_Avdiu_Resume.pdf');
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        };

        handlePDFDownload();
    };


    return (
        <>
            {/* Here is the section that holds the div for Hello BeyondMD and the button
                to download the resume. Both of these requirements are mentioned in the email that
                I received from BeyondMD.
            */}
            <div className="text-white flex flex-row justify-center items-center">
                <div className="flex justify-center items-center py-5">
                    <h1 className="text-5xl font-bold">Hello BeyondMD!</h1>
                </div>


            </div>

            <div className="flex flex-col justify-center items-center py-5 space-y-5">

                {/* In this seciton I have the button that will let you
                    download the resume in PDF format. The call will be made to
                    the backend, Django in this case, and the response will be the
                    pdf format of my resume.
                */}


                <div className="">
                    <h1 className="font-bold text-white text-2xl">Download Resume</h1>
                </div>

                <div className="">
                    <button onClick={() => handleClick()} className="font-semibold bg-red-600 hover:bg-white transition-all duration-300 text-white hover:text-red-700 hover:shadow-2xl transition-all duration-200 px-4 py-4 rounded-md border-red-600 hover:border-none">
                        PDF Resume
                    </button>
                </div>

            </div>

        </>
    );
}

export default HelloBeyondMD;