import { useEffect, useState } from "react";

const Services = ({ service }) => {

    const { picture, title, description, price } = service;

    return (

        <div>
            
            <div className="card shadow-xl">
                <figure><img className="w-full" src={picture} alt="picture" /></figure>
                <div className="p-4">
                    <p className="text-lg mt-2 font-bold">{title}</p>
                    <p className="mt-2">{description}</p>
                    <p>Price : {price} $</p>
                    <button className="btn font-semibold px-2 py-1 rounded-md">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;