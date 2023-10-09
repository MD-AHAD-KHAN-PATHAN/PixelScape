import { useLoaderData } from "react-router-dom";
import Services from "../../Components/Services/Services";
import Banner from "../../Components/Banner/Banner";
import Gallary from "../../Components/Gallary/Gallary";

const Home = () => {

    const data = useLoaderData();


    return (
        <>
            <Banner></Banner>
            <h1 className="text-center my-10 font-bold md:text-5xl text-4xl text-black">Our <span className="text-gray-500">Services</span></h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:mx-20 mx-6">
                {
                    data?.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>
            <div className="md:mx-20 mx-8">
                <Gallary></Gallary>
            </div>

            <div className="md:m-20 m-8">
                <h1 className="text-center mb-10 font-bold md:text-5xl text-3xl text-black">Our <span className="text-gray-500">Sponsor</span></h1>
                <div className="grid md:grid-cols-4 grid-cols-1 justify-around">

                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-52" src="https://i.ibb.co/cg9rhgJ/th.jpg" alt="" />
                        <p className="text-lg font-bold mt-4">Merchandise Sponsorship</p>
                    </div>
                    <div className="my-6 md:my-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-40" src="https://i.ibb.co/S00ynLX/capcom.jpg" alt="" />
                        <p className="text-lg font-bold mt-4">Streaming Sponsorship</p>
                    </div>
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-40" src="https://i.ibb.co/rk3WCXH/xboxpng.png" alt="" />
                        <p className="text-lg font-bold mt-4">Title Sponsorship</p>
                    </div>
                    <div className="mt-6 md:mt-0" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <img className="w-24" src="https://i.ibb.co/XScwK03/OIP.jpg" alt="" />
                        <p className="text-lg font-bold mt-4">Food and Beverage Sponsorship</p>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Home;