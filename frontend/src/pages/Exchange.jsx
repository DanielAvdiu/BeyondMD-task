import Select from "react-dropdown-select";


const Exchange = () => {

    const currencies = [
        {
            value: 1,
            label: "SDG"
        },
        {
            value: 2,
            label: "MYR"
        },
        {
            value: 3,
            label: "EUR"
        },
        {
            value: 4,
            label: "USD"
        },
        {
            value: 5,
            label: "AUD"
        },
        {
            value: 6,
            label: "JPY"
        },
        {
            value: 7,
            label: "CNH"
        },
        {
            value: 8,
            label: "HKD"
        },
        {
            value: 9,
            label: "CAD"
        },
        {
            value: 10,
            label: "INR"
        },
        {
            value: 11,
            label: "DKK"
        },
        {
            value: 12,
            label: "GBP"
        },
        {
            value: 13,
            label: "RUB"
        },
        {
            value: 14,
            label: "NZD"
        },
        {
            value: 15,
            label: "MXN"
        },
        {
            value: 16,
            label: "IDR"
        },
        {
            value: 17,
            label: "TWD"
        },
        {
            value: 18,
            label: "THB"
        },
        {
            value: 19,
            label: "VND"
        }
    ];

    return (
        <>
            <div className="space-y-10 sm:space-y-0 flex flex-col justify-center items-center border-2 border-black border-solid px-10 py-10 mr-5 ml-5 mt-5 mb-5">

                <h1 className="text-3xl">Exchange Here</h1>
                {/* This is the page where we can exchange currencies */}
                <div className="space-y-10 sm:space-y-0 flex flex-col justify-center items-center border-2 border-black border-solid px-10 py-10 mr-5 ml-5 mt-5 mb-5">

                    {/* <div className="border-2 border-red-600 border-solid mx-4 px-5">
                    <h1>First div</h1>
                </div> */}

                    <div className="flex flex-col sm:flex-row">


                        <Select className="mx-5"
                            options={currencies}
                            onchange={(values) => this.setValues(values)
                            } />

                        <div className="px-5">

                        </div>
                        <Select className="mx-5"
                            options={currencies}
                            onchange={(values) => this.setValues(values)
                            } />
                    </div>

                    <div>
                        <input type="text" placeholder="value" className="border-2 border-black border-solid my-10 mx-10"/>
                    </div>


                </div>

            </div>
        </>
    );
}

export default Exchange;