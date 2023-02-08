import moment from 'moment/moment';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const Team = () => {

    const { user, profileImage } = useContext(AuthContext)

 
    return (
        <div className='my-20'>

            <div className='border shadow-lg w-full md:w-1/2 md:px-4 py-7 mb-14  border-gray-300'>
                <h1 className=' text-lg md:text-3xl mb-3'>Settings for <span>Register team name</span></h1>
                <h2 className=' text-sm md:text-xl mb-3'>{profileImage?.length ? profileImage?.length : 1} team member</h2>
                <h1 className=' text-sm md:text-xl mb-3'>Team created on {moment(profileImage[0]?.date).format('LL')} ({moment(profileImage[0]?.date).startOf('hour').fromNow()}).</h1>
            </div>






            {/* Secound step */}


            <div className='my-10 md:flex flex-col md:flex-row'>


                <div className=' w-full shadow-lg md:w-1/4 h-48 border border-gray-300 flex md:justify-center md:justify-start'>
                    <ul className='md:ml-6'>
                        <li className='text-gray-500 mb-3 text-lg'>Genaral</li>
                        <div className='ml-2'>
                            <li className='text-gray-500 mb-3'>Team Datails</li>
                            <li className='text-gray-500 mb-3'>Danger zone</li>
                            <li className='text-gray-500 mb-3'>Fast Hosting Services</li>
                            <li className='text-gray-500 mb-3'>Total Security</li>
                        </div>
                    </ul>
                </div>



                <div className=' w-full md:w-2/3 border md:ml-6 mt-7 md:mt-0 px-6 py-10 shadow-lg'>
                    <div className='mb-10 py-10'>
                        <h1 className='text-3xl '>Team Details</h1>
                        <h1 >Your team’s profile and single sign-on information</h1>
                    </div>





                    <div className=''>

                        <h1 className='text-3xl mb-5'>Team information</h1>
                        <div className='flex '>

                            <div>
                                <h1 className='text-lg font-serif mb-3 '>Name:</h1>
                                <h1 className='text-lg font-serif mb-3'>Slug:</h1>
                                <h1 className='text-lg font-serif mb-3'>Logo:</h1>
                                <h1 className='text-lg font-serif mb-3'>Current plan:</h1>

                            </div>


                            <div className='mb-5'>
                                {
                                    user?.uid ?
                                        <>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3 '>{user?.displayName}</h1>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>Tech Armie</h1>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>{user?.email}</h1>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>User Phone</h1>
                                        </>
                                        :
                                        <>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3 '>User Name</h1>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>Service Team</h1>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>User Email</h1>
                                            <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>User Phone</h1>
                                        </>
                                }

                            </div>
                        </div>



                        {/* <button className="builds-button px-4 py-2 rounded-lg font-semibold dark:bg-info dark:text-black mt-10">Edit Team Information</button> */}

                        <label htmlFor="my-modal-3" className="builds-button px-4 py-2 rounded-lg font-semibold dark:bg-info dark:text-black">Edit Team Information</label>
                    </div>

                </div>




            </div>



        </div>
    );
};

export default Team;