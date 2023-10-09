import { useLoaderData } from "react-router-dom";
import Services from "../../Components/Services/Services";
import Banner from "../../Components/Banner/Banner";
import Gallary from "../../Components/Gallary/Gallary";

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
            <div className="mx-20">
                <Gallary></Gallary>
            </div>

            <div className="m-20">
                <h1 className="text-center mb-10 font-bold text-5xl text-black">Our <span className="text-gray-500">Sponsor</span></h1>
                <div className="grid grid-cols-4 justify-around">

                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-52" src="https://i.ibb.co/cg9rhgJ/th.jpg" alt="" />
                        <p className="text-lg font-bold mt-4">Merchandise Sponsorship</p>
                    </div>
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-40" src="https://i.ibb.co/S00ynLX/capcom.jpg" alt="" />
                        <p className="text-lg font-bold mt-4">Streaming Sponsorship</p>
                    </div>
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-40" src="https://i.ibb.co/rk3WCXH/xboxpng.png" alt="" />
                        <p className="text-lg font-bold mt-4">Title Sponsorship</p>
                    </div>
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-24" src="https://i.ibb.co/XScwK03/OIP.jpg" alt="" />
                        <p className="text-lg font-bold mt-4">Food and Beverage Sponsorship</p>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Home;