import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const { createUser, profileUpdate } = UseHooks();
    const navigate = useNavigate();

    function slow(){
        navigate('/');
    }
    
    const handleRegistration = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters long.');
        }

        if (!/[A-Z]/.test(password)) {
            return toast.error('Password must contain at least one uppercase letter.');
        }

        if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return toast.error('Password must contain at least one special character.');
        }

        createUser(email, password)
            .then(() => {
                profileUpdate(name, url)
                    .then(() => {
                        toast.success('Registation Successfully');
                        setTimeout(slow, 2000);
                    })
                    .catch(error => toast.error(error.code))
            })
            .catch(error => {
                toast.error(error.code);
            })


    }

    return (
        <>
            <div className="min-h-screen md:bg-base-200 md:my-0 my-10">
                <div className="md:hero-content md:flex md:flex-row-reverse md:mx-0 mx-6">
                    <div className="text-center md:text-left" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                        <h1 className="md:text-5xl text-3xl font-bold md:mb-0 mb-6">Please Registration !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className="card-body">
                            <form onSubmit={handleRegistration}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Full name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name="url" placeholder="image url" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral">Register</button>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </form>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;