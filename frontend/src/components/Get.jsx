import { useState } from "react";
import { useEffect } from "react";

const Get = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/playground/quotes/')
          .then(response => response.json())
          .then(data => {
            setData(data);
            console.log(data); // Move the console.log inside the 'then' block
          });
      }, []);


    return ( 
        <>
            <div>
                <h1>This is the new file</h1>
            </div>
        </>
    );
}
 
export default Get;