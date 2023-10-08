import { toast } from "react-toastify";
import UseHooks from "../../Components/Hooks/UseHooks";

const SocialLogin = () => {
    const {googleLogin} = UseHooks();

    const handleLogin = () => {
        googleLogin()
        .then(() => toast.success('Successfully Login'))
        .catch((error) => toast.error(error.code))
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={handleLogin} className="btn btn-outline">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;