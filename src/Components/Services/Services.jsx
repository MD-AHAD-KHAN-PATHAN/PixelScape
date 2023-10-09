import { Link } from "react-router-dom";

const Services = ({ service }) => {

    const {id, picture, title, description, price } = service;

    return (

        <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            
            <div className="card bg-gray-500 text-white">
                <figure><img className="w-full" src={picture} alt="picture" /></figure>
                <div className="p-4">
                    <p className="text-lg mt-2 font-bold">{title}</p>
                    <p className="mt-2 font-semibold">{description}</p>
                    <p className="text-lg font-semibold my-4">Price : <span className="text-xl font-bold">{price}</span> $</p>
                    <Link to={`/details/${id}`}><button className="py-2 px-4 text-white font-bold bg-gray-700 rounded-full">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;