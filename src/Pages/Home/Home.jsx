import { useLoaderData } from "react-router-dom";
import Services from "../../Components/Services/Services";
import Banner from "../../Components/Banner/Banner";

const Home = () => {

    const data = useLoaderData();


    return (
        <>
            <Banner></Banner>
            <h1 className="text-center my-10 font-bold text-5xl text-black">Our <span className="text-gray-500">Services</span></h1>
            <div className="grid grid-cols-3 gap-4 mx-20">
                {
                    data?.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>

        </>

    );
};

export default Home;