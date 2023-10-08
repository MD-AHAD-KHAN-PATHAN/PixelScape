import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";

const ServiceDetails = () => {

    const {id} = useParams();
    const intId = parseInt(id);

    const items = useLoaderData() || [];

    return (
        <div className="my-20">
            {
                items?.map(item => item.id === intId && <Details key={item.id} item={item}></Details>)
            }
        </div>
    );
};

export default ServiceDetails;