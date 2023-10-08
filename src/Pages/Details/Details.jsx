
const Details = ({ item }) => {

    const { picture, details } = item;

    return (
        <div className="w-3/4 mx-auto">
            <div >
                <img className="rounded-md h-[500px] w-full" src={picture} alt="" />
            </div>
            <p className="my-6">{details}</p>
        </div>
    );
};

export default Details;