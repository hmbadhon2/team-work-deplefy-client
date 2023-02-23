
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Player } from '@lottiefiles/react-lottie-player'

const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, createUser, updateUser, googleSingIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    // }
    const date = new Date();


    const handleGoogleSingUp = () => {
        googleSingIn()
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken;
                const user = result.user
                console.log(user)
                saveUser(user?.displayName, user?.email);
                toast.success('User created Successfully')
            })
            .catch(error => {
                console.log(error)
                toast.error('Login is not Successfully')
                setSignUpError(error.message)
            })
    }





    const handleSignUp = (data) => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                reset();
                toast.success('User created Successfully', {
                    position: toast.POSITION.TOP_CENTER
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
            })
            .catch(error => {
                toast.error('Sign Up is not Successfully')
                setSignUpError(error.message)
            })
    }
    const saveUser = (name, email, userType) => {
        const user = { name, email, userType, date };
        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                console.log(data)
            })
    }


    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;


    return (
        <div className='mb-10'>
        <div className="md:hero dark:text-black ">
            <div className="md:hero-content flex-col lg:flex-row-reverse justify-between">
                {/* <img src={loginImg} className="max-w-sm md:max-w-lg rounded-lg shadow-2xl lg:ml-10" alt='login' /> */}
                <div className='border bg-gradient-to-b from-indigo-300 mx-4 md:mx-0 px-0 md:px-11 pt-8 pb-8 rounded-md' >

                    <h1 className='text-center font-serif '>Create An Account</h1>

                    <div className='w-full md:w-96 p-7'>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text dark:text-white">Name</span></label>
                                <input type="text"
                                    {...register("name", {
                                        required: "Name is required"
                                    })}
                                    className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text dark:text-white">Email</span></label>
                                <input type="email"
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
                            <input className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold  py-3 rounded-lg w-full' value="Sign Up" type="submit" />
                            <div>
                                {signUpError && <p className='text-red-600'>{signUpError}</p>}
                            </div>
                        </form>
                        <p className='dark:text-white font-serif text-sm'>Already have an account  <Link className='text-purple-900 font-bold dark:text-purple-500' href="/login">Please Login</Link></p>
                        <div className="divider dark:text-white">OR</div>

                        <div>
                            {
                                theme == "dark" ?
                                <button onClick={handleGoogleSingUp} type="button" className="text-purple-900 w-full hover:text-white border border-purple-700 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                                <div className='flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 mr-2 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p className='font-bold'>Login with Google</p>
                                </div>
                            </button>
                                    :
                                    <button onClick={handleGoogleSingUp} type="button" className="text-purple-900 w-full hover:text-white border border-purple-700 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 mr-2 fill-current">
                                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                        </svg>
                                        <p className='font-bold'>Login with Google</p>
                                    </div>
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

export default Signup;
