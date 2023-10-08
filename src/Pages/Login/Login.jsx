import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseHooks from '../../Components/Hooks/UseHooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { userLogin } = UseHooks();


    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then(() => {
                toast.success('User login Successfull');
            })
            .catch((error) => {
                toast.error(error.code);
            })

    }



    return (
        <>
            <div className=" min-h-screen w-full justify-center bg-base-200">
                <div className="hero-content flex lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn btn-neutral">Login</button>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </form>
                            <label className="label">
                                Haven't account? <Link to="/register" className="label-text-alt link link-hover">Please Registration</Link>
                            </label>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;