import { useEffect, useState } from "react";
import CustomData from "../CustomData/CustomData";

const CustomService = () => {

    const [serviceItems, setServiceItems] = useState([]);
    const [NoData, setNoData] = useState('');

    const clearLocalstorage = () => {
        localStorage.clear();
        setServiceItems([]);
        setNoData('There is no data here !')
    }

    useEffect(() => {
        const donationsCategory = JSON.parse(localStorage.getItem('service'))

        if (donationsCategory) {
            setServiceItems(donationsCategory);
        }
        else {
            setNoData('There is no data here !');
        }
    }, [])

    return (
        <div className="min-h-screen">
            {
                NoData ? <p className="md:h-[80vh] h-[50vh] flex justify-center items-center md:text-5xl text-2xl font-semibold">{NoData}</p> :
                    <div className="md:mx-20 m-4">
                        {
                            serviceItems.length > 0 && <div className="text-right mb-4">
                                <button onClick={() => clearLocalstorage()} className="px-4 py-2 bg-red-500 text-white rounded-md font-bold">Delete Custom Services</button>
                            </div>
                        }

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                            {
                                serviceItems.map((card, idx) => <CustomData card={card} key={idx}></CustomData>)
                            }
                        </div>

                    </div>

            }
        </div>
    );
};

export default CustomService;