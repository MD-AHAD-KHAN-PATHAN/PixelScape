import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';


const AboutUs = () => {


    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-center my-10 font-bold text-5xl text-gray-500">About <span className="text-black">Us</span></h1>
            <div className="grid md:grid-cols-2 mb-10 bg-gray-500 text-white rounded-r-lg">
                <div>
                    <img className="" src={'https://i.ibb.co/n7r1CwQ/mimi-thian-vd-XMSi-X-n6-M-unsplash.jpg'} alt="" />
                </div>
                <div className="flex items-center">
                    <p className="px-6">
                        At PixelScape, we are passionate about bringing the world of gaming to life through unforgettable events. With years of experience in game event management, we have become a leading force in the industry, known for our commitment to excellence and dedication to creating exceptional gaming experiences.
                        <br />
                        <br />
                        Our mission is clear to elevate gaming events to new heights, delivering excitement, entertainment, and engagement to both participants and spectators. We understand the dynamic and ever-evolving gaming landscape, and our team of experts is adept at crafting events that cater to the diverse interests of the gaming community.

                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 bg-gray-500 text-white mb-10  rounded-l-lg">
                <div>
                    <img src={'https://i.ibb.co/Wy27fTz/jed-villejo-b-Ec-C0ny-Ip2g-unsplash.jpg'} alt="" />
                </div>
                <div className="flex items-center order-first">
                    <p className="px-6">
                        We take pride in our ability to seamlessly blend the thrill of competition, the creativity of cosplay, and the excitement of community engagement into each event we manage. Whether it's a large-scale esports tournament, a cosplay extravaganza, or an intimate fan gathering, we bring a level of dedication and expertise that ensures every event is a resounding success.
                        <br />
                        <br />
                        At PixelScape, we are more than event managers; we are gaming enthusiasts who share your passion. Our commitment to excellence, attention to detail, and unwavering dedication to the gaming community set us apart as the go-to choice for your next gaming event. Join us in creating gaming experiences that leave a lasting impact and memories to cherish.
                    </p>
                </div>
            </div>
            <h1 className="text-center my-10 font-bold text-5xl text-black">Team <span className="text-gray-500">Member</span></h1>
            <div className="grid grid-cols-4 gap-4 mb-20">
                <div className="text-center border-gray-500 border rounded-md">
                    <div className='flex justify-center my-6'>
                        <img className='rounded-full w-40' src="https://i.ibb.co/7j1J3Wm/ahad-khan-white.png" alt="" />
                    </div>
                    <p className='text-xl text-gray-500 font-bold'>Ahad Khan</p>
                    <p className='text-lg font-bold text-gray-700'>CEO</p>
                    <ul className="flex justify-center mb-6 text-2xl gap-4 mt-4 text-gray-500">
                        <li className=''><FaFacebookSquare></FaFacebookSquare></li>
                        <li><FaInstagramSquare></FaInstagramSquare></li>
                        <li><FaLinkedin></FaLinkedin></li>
                    </ul>
                </div>
                <div className="text-center border-gray-500 border rounded-md">
                    <div className='flex justify-center my-6'>
                        <img className='rounded-full w-40' src="https://i.ibb.co/7j1J3Wm/ahad-khan-white.png" alt="" />
                    </div>

                    <p className='text-xl text-gray-500 font-bold'>Ashik Ahmed</p>
                    <p className='text-lg font-bold text-gray-700'>Manager</p>
                    <ul className="flex justify-center mb-6 text-2xl gap-4 mt-4 text-gray-500">
                        <li className=''><FaFacebookSquare></FaFacebookSquare></li>
                        <li><FaInstagramSquare></FaInstagramSquare></li>
                        <li><FaLinkedin></FaLinkedin></li>
                    </ul>
                </div>
                <div className="text-center border-gray-500 border rounded-md">
                    <div className='flex justify-center my-6'>
                        <img className='rounded-full w-40' src="https://i.ibb.co/7j1J3Wm/ahad-khan-white.png" alt="" />
                    </div>
                    <p className='text-xl text-gray-500 font-bold'>Imam Hasan</p>
                    <p className='text-lg font-bold text-gray-700'>Planner</p>
                    <ul className="flex justify-center mb-6 text-2xl gap-4 mt-4 text-gray-500">
                        <li className=''><FaFacebookSquare></FaFacebookSquare></li>
                        <li><FaInstagramSquare></FaInstagramSquare></li>
                        <li><FaLinkedin></FaLinkedin></li>
                    </ul>
                </div>
                <div className="text-center border-gray-500 border rounded-md">
                    <div className='flex justify-center my-6'>
                        <img className='rounded-full w-40' src="https://i.ibb.co/7j1J3Wm/ahad-khan-white.png" alt="" />
                    </div>
                    <p className='text-xl text-gray-500 font-bold'>Zarin Tasnim</p>
                    <p className='text-lg font-bold text-gray-700'>Designer</p>
                    <ul className="flex justify-center mb-6 text-2xl gap-4 mt-4 text-gray-500">
                        <li className=''><FaFacebookSquare></FaFacebookSquare></li>
                        <li><FaInstagramSquare></FaInstagramSquare></li>
                        <li><FaLinkedin></FaLinkedin></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;