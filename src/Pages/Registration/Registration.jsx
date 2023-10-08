import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const { createUser, handleUpdateProfile } = UseHooks();
    const navigate = useNavigate();

    const handleRegistration = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const url = e.target.url.value;
        const password = e.target.password.value;

        if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            
            return toast.error('Invalid password. Please check the requirements.');
        }

        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, url)
                    .then(() => {
                        toast.success('Registation Successfully');
                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => {
                toast.error(error.message);
            })


    }

    return (
        <>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Registration !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegistration}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Full name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name="url" placeholder="image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
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