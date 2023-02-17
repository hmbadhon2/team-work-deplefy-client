import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';

import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useTheme } from 'next-themes';

const Login = () => {




    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn, googleSingIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    // const from = location.state?.from?.pathname || '/';

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    // const navigate = useNavig();
    // const location= useLocation();



    // const from = location.state?.from?.pathname || '/';

    // useEffect(()=>{
    //     if(token){
    //         navigate(from, {replace: true})
    //     }
    // }, [from, navigate, token])

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;


    const date = new Date();


    const handleLogin = (data) => {
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                reset();
                console.log(user)
                setLoginUserEmail(data.email);
                toast.success('Please Login Successfully');
                // navigate(from, {replace: true})

            })


            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })
    }


    const saveUser = (name, email, date) => {
        const user = { name, email, date };
        fetch('https://deplefy-server.vercel.app/users', {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(email);
                console.log(data)
            })
    };




    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                // const user = result.user
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken;
                const user = result.user;
                toast.success('You have login Successfully');
                console.log(user)
                saveUser(user?.displayName, user?.email, date);
            })
            .catch(error => {
                console.log(error);
                toast.error('Login is not Successfully')
                setLoginError(error.message)
            })
    }




    return (
        <div className='mb-10'>
            <div className="hero dark:text-black ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    {/* <img src={loginImg} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl lg:ml-10" alt='login' /> */}
                    <div className='border bg-gradient-to-b from-indigo-300 px-11 pt-8 pb-8 rounded-md' >

                        <h1 className='text-center font-serif '>Sign Into Your Account</h1>

                        <div className='w-full md:w-96 p-7'>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text dark:text-white">Email</span></label>
                                    <input type="text"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered w-full" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text dark:text-white">Password</span></label>
                                    <input type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        className="input input-bordered w-full" />
                                    <label className="label"> <span className="label-text dark:text-white">Forget Password?</span></label>
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <input className='login-button bg-gradient-to-tr from-violet-900 to-blue-600 py-3 rounded-lg w-full' value="LOGIN" type="submit" />
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>
                            </form>
                            <p className='dark:text-white font-serif text-sm'>New to Deplify <Link className='teamNameColor font-bold dark:text-lime-600' href="/signup">Create a New Account</Link></p>
                            <div className="divider dark:text-white">OR</div>

                            <div>
                                {
                                    theme == "dark" ?
                                        <button onClick={handleGoogleSingIn} aria-label="Login with Google" type="button" className="google-buttonDark flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-violet-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                            </svg>
                                            <p>Login with Google</p>
                                        </button>
                                        :
                                        <button onClick={handleGoogleSingIn} aria-label="Login with Google" type="button" className="google-button flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-violet-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                            </svg>
                                            <p>Login with Google</p>
                                        </button>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;