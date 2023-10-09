


const UpcomingEvent = () => {


    return (
        <div className="min-h-screen md:my-20 my-6">
            <div className="lg:w-3/4 grid lg:grid-cols-2 lg:mx-auto mx-6 bg-gray-500 text-white mb-6">
                <div >
                    <img className="" src="https://i.ibb.co/ph9jrht/ella-don-k-CFXVis-Uqug-unsplash.jpg" alt="" />
                </div>
                <div className="p-6 text-center flex justify-center items-center">
                    <div>
                        <p className="text-3xl font-bold">Gaming Ninja</p>
                        <p className="text-xl font-bold my-4">Pixel Paradise Arcade</p>
                        <p className="text-sm my-2">123 Main Street, Cityville, Stateville, 12345</p>
                        <p>sunday 17 October, 2023</p>
                        <div className="rating mb-4">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-3/4 grid lg:grid-cols-2 lg:mx-auto mx-6 bg-gray-500 text-white">
                <div >
                    <img className="" src="https://i.ibb.co/z2q0xc0/francesco-ungaro-Vz7-G4-Ptme-Ho-unsplash.jpg" alt="" />
                </div>
                <div className="p-6 text-center flex justify-center items-center">
                    <div>
                        <p className="text-3xl font-bold">World Championship</p>
                        <p className="text-xl font-bold my-4">Virtual Vanguard eSports Arena</p>
                        <p className="text-sm my-2">456 Park Avenue, Townsville, Stateville, 56789</p>
                        <p>sunday 25 October, 2023</p>
                        <div className="rating mb-4">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpcomingEvent;