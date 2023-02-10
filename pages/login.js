import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";
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

    const date =new Date();

    const saveUser = (name, email, userType) => {
        const user = { name, email, userType, date};
        fetch('https://deplefy-server-mocha.vercel.app/users', {
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
    }

    const handleLogin = (data) => {
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                reset();
                console.log(user)
                setLoginUserEmail(data.email);
                toast.success('Please Login Successfully');


            })

            const userInfo = {
                displayName: data.name,
                email: data.email
            }
            console.log(userInfo)
            updateUser(userInfo)
                .then(() => {
                    console.log(data.name, data.email, data.userType);
                    saveUser(data.name, data.email, data.userType);

                })
                .catch(error => console.log(error))
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })
    }


    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;


    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                // const user = result.user
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken;
                const user = result.user;
                toast.success('You have login Successfully');
                console.log(user)
                saveUser(user?.displayName, user?.email);
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }




    return (
        <div className=''>
            <div className="hero dark:text-black ">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    {/* <img src={loginImg} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl lg:ml-10" alt='login' /> */}
                    <div>
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
                                <input className='login-button dark:bg-info dark:text-black py-3 rounded-lg w-full' value="Login" type="submit" />
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>
                            </form>
                            <p className='dark:text-white'>New to Deplify <Link className='teamNameColor font-bold dark:text-info' href="/signup">Create a New Account</Link></p>
                            <div className="divider dark:text-white">OR</div>

                            <div>
                                {
                                    theme == "dark" ? <button onClick={handleGoogleSingIn} className='btn btn-outline btn-info rounded-lg w-full'><div className='flex items-center'><FaGoogle className='font-bold text-2xl mr-2'></FaGoogle>Login with Google</div></button> : <button onClick={handleGoogleSingIn} className='google-button rounded-lg w-full'><div className='flex justify-center'><FaGoogle className='font-bold text-2xl mr-2'></FaGoogle>Login with Google</div></button>
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