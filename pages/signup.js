
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
    // const [token] = useToken(createdUserEmail);
    // const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }
const date =new Date();


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
        const user = { name, email, userType, date};
        fetch('https://deplefy-server.vercel.app/users', {
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
        <div className=''>
            <div className="hero dark:text-black">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    {/* <img src className="max-w-sm md:max-w-lg rounded-lg shadow-2xl lg:ml-10" alt='login' /> */}
                    <div className='grid grid-cols-2 gap-12'>



                   <div>
                   <Player className='w-4/5'
                      autoplay
                      loop
                    src="https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json"></Player>

                   </div>






                        <div className='w-full md:w-96 p-7 mx-auto border bg-gradient-to-b from-indigo-300 px-10 pt-8 pb-8 rounded-md'>
                            <h1 className='font-serif text-lg'> Create An Account </h1>
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control w-full">
                                    <label className="label"> <span className="label-text dark:text-white">Name</span></label>
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>

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
                                    <input type="password" {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })} className="input input-bordered w-full" />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                                <input className='bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-tr dark:from-black dark:to-black dark:text-white font-bold py-3 rounded-lg w-full mt-4' value="Sign Up" type="submit" />
                                {signUpError && <p className='text-red-600'>{signUpError}</p>}

                            </form>
                            <p className='dark:text-white text-sm font-serif mt-1'>Already have an account <Link href="/login" className='teamNameColor font-bold dark:text-black' >Please Login</Link></p>
                            <div className="divider dark:text-white">OR</div>
                            <div>
                                {
                                    theme == "dark" ?
                                        <button onClick={handleGoogleSingUp} aria-label="Login with Google" type="button" className="google-buttonDark flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-violet-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                            </svg>
                                            <p>Login with Google</p>
                                        </button>
                                        :
                                        <button onClick={handleGoogleSingUp} aria-label="Login with Google" type="button" className="google-button flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  focus:ring-violet-400">
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

export default Signup;
