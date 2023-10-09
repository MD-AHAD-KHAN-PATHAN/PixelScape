import { useLoaderData } from "react-router-dom";
import VenueDetails from "./VenueDetails";

const Venue = () => {

    const info = useLoaderData();

    console.log(info);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 md:w-3/4 md:mx-auto gap-4 md:my-20 mx-6 my-6">
            {
                info.map(item => <VenueDetails key={item.id} item={item}></VenueDetails>)
            }
        </div>
    );
};

export default Venue;