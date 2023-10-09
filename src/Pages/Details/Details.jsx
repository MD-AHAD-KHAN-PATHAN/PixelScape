import { ToastContainer, toast } from "react-toastify";

const Details = ({ item }) => {

    const { picture, title, details, price } = item;

    const handleClick = () => {

        const donationsArray = [];

        const data = JSON.parse(localStorage.getItem('service'));

        if (!data) {
            donationsArray.push(item);
            localStorage.setItem('service', JSON.stringify(donationsArray));
            toast.success('Your service added successfully');
        }
        else {

            donationsArray.push(...data, item);
            localStorage.setItem('service', JSON.stringify(donationsArray));
            toast.success('Your service added successfully');
        }
    }

    return (
        <div className="min-h-screen flex items-center">
            <div className="w-3/4 grid grid-cols-2 mx-auto bg-gray-500 text-white">
                <div >
                    <img className="" src={picture} alt="" />
                </div>
                <div className="p-6">
                    <p className="text-xl font-bold">{title}</p>
                    <p className="text-sm text-justify my-2">{details}</p>
                    <div className="rating mb-4">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <div className="flex justify-between">
                        <div><button className="px-4 py-2 font-bold bg-slate-400 rounded-lg">$ {price}</button></div>
                        <div><button onClick={() => handleClick()} className="px-4 py-2 font-semibold bg-slate-400 rounded-lg">Book Now</button></div>
                    </div>

                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>

    );
};

export default Details;