

const VenueDetails = ({item}) => {

    const {image, venue_name, description, address, price} = item;

    return (

        <div data-aos="zoom-in-up" className=" bg-gray-500 text-white">
                <div >
                    <img className="" src={image} alt="" />
                </div>
                <div className="p-6">
                    <p className="text-xl font-bold">{venue_name}</p>
                    <p className="text-md text-justify my-2">{description}</p>
                    <p className="text-md my-4 font-bold">{address}</p>
                    <div className="rating mb-4">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="flex justify-between">
                        <div><button className="px-4 py-2 font-bold bg-slate-400 rounded-lg">$ {price}</button></div>                        
                    </div>


                </div>
            </div>

    );
};

export default VenueDetails;