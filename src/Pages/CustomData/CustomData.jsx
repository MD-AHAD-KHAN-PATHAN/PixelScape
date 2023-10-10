
const CustomData = ({card}) => {


    const {picture, title, description, price} = card || {};

    return (
        <div className="" data-aos="fade-up" data-aos-duration="1000">
           <div className=" bg-gray-500 text-white">
                <div >
                    <img className="" src={picture} alt="" />
                </div>
                <div className="p-6">
                    <p className="text-xl font-bold">{title}</p>
                    <p className="text-sm text-justify my-2">{description}</p>
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
        </div>
    );
};

export default CustomData;