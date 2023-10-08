
const Details = ({ item }) => {

    const { picture, title, details } = item;

    return (
        <div className="w-3/4 grid grid-cols-2 mx-auto bg-gray-500 text-white">
            <div >
                <img className="" src={picture} alt="" />
            </div>
            <div className="p-6">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-sm text-justify my-2">{details}</p>
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" checked/>
                    <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
            </div>
        </div>
    );
};

export default Details;