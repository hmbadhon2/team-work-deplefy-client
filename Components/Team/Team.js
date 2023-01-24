import React from 'react';


const Team = () => {



    return (
        <div className='my-20'>

            <div className='border w-full md:w-1/2 px-4 py-7 mb-14  border-gray-300'>
                <h1 className=' text-lg md:text-3xl mb-3'>Settings for <span>Register team name</span></h1>
                <h2 className=' text-sm md:text-xl mb-3'>1 team member</h2>
                <h1 className=' text-sm md:text-xl mb-3'>Team created on Jul 25, 2022 (6 months ago).</h1>
            </div>






            {/* Secound step */}


            <div className='my-10 flex flex-col md:flex-row '>


                <div className=' w-full md:w-1/4 h-48 border border-gray-300 flex justify-center md:justify-start'>
                    <ul className='ml-6'>
                        <li className='text-gray-500 mb-3 text-lg'>Genaral</li>
                        <div className='ml-2'>
                            <li className='text-gray-500 mb-3'>Team Datails</li>
                            <li className='text-gray-500 mb-3'>Danger zone</li>
                            <li className='text-gray-500 mb-3'>Fast Hosting Services</li>
                            <li className='text-gray-500 mb-3'>Total Security</li>
                        </div>
                    </ul>
                </div>


















                <div className=' w-full md:w-2/3 border ml-6 mt-7 md:mt-0 px-6 py-10'>
                    <div className='mb-10 py-10'>
                        <h1 className='text-3xl '>Team Details</h1>
                        <h1 >Your team’s profile and single sign-on information</h1>
                    </div>





                    <div className=''>

                        <h1 className='text-3xl mb-5'>Team information</h1>
                        <div className='flex '>

                            <div>
                                <h1 className='text-lg font-serif mb-3 '>Name:</h1>
                                <h1 className='text-lg font-serif mb-3'>Team Name:</h1>
                                <h1 className='text-lg font-serif mb-3'>Email:</h1>
                                <h1 className='text-lg font-serif mb-3'>Phone:</h1>

                            </div>


                            <div>
                                <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3 '>User name</h1>
                                <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>Service Team</h1>
                                <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>User Email</h1>
                                <h1 className='text-lg font-serif ml-0 md:ml-12 mb-3'>User Phone</h1>
                            </div>
                        </div>



                        <button className="btn btn-info btn-sm mt-10">Edit Team Information</button>
                    </div>

                </div>




            </div>



        </div>
    );
};

export default Team;