import { Link, useLocation,  } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import useAuth from '../../Hooks/useAuth';
// import axios from 'axios';

const Login = () => {
    const { signIn } = useAuth();
    const location = useLocation();
    // const navigate = useNavigate();
    // console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                // const user = {email}
                // get access token
                // axios.post('https://car-doctor-server-one-delta.vercel.app/jwt', user, {withCredentials: true})
                // .then(res => {
                //     if(res.data.success){
                //         navigate(location?.state ? location?.state : '/')
                //     }
                //     console.log(res.data)
                // })

            })
            .catch(error => console.error(error))
        console.log(email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>New Here? <Link to='/signUp' type='button' className='text-orange-500 font-bold'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;