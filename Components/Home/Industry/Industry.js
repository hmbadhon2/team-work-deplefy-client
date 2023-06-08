import React from 'react';
import { SiUnilever, SiPeloton, SiTwilio } from 'react-icons/si';

const Industry = () => {
    return (
        <div className='px-4 md:px-0 py-24 rounded-2xl bg-gradient-to-tr from-violet-900 to-blue-600 dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500'>
        <div className='lg:max-w-3xl lg:mx-auto text-white'>
            <h1 className='text-4xl text-justify mb-4'>We can launch websites and campaigns in minutes with no ops, a goal that has often been a pipe dream in our industry.</h1>
            <div className='flex items-center justify-center mt-8'>
                <img alt="" className="w-14 h-14 rounded-full ring-2" src="https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=8l-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8=" />
                <div className='ml-4'>
                    <h1>JUSTIN WATTS</h1>
                    <p>HEAD OF ENGINEERING, <br />
                        TUNNELBEAR</p>
                </div>
            </div>

            <div className='md:flex md:text-3xl md:justify-around items-center mt-10'>
                <h1 className=' mb-3 lg:mb-0 flex items-center uppercase'><SiTwilio className='mr-1'></SiTwilio>Twilio</h1>
                <h1 className='mb-3 lg:mb-0'>Google</h1>
                <SiUnilever className='mb-3 lg:mb-0'></SiUnilever>
                <h1 className='flex items-center uppercase mb-3 lg:mb-0'><SiPeloton className='mr-1'></SiPeloton>Peloton</h1>
            </div>
        </div>
    </div>
    );
};

export default Industry;