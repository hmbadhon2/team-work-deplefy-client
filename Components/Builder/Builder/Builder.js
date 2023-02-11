import React from 'react';
import Image from 'next/image';
import {Player} from '@lottiefiles/react-lottie-player'




const Builder = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='deployAnimation relative mb-8'>
                    {/* <Image src="/builds.png" width={2700} height={2700}></Image> */}
                    <Player className='w-max'
				autoplay
				loop
				src="https://assets7.lottiefiles.com/private_files/lf30_jlkylbqc.json"></Player>

                
                
                   
                    </div>
                   
                    <div>
                        <h1 className="text-5xl font-bold dark:text-lime-600">Builds</h1>
                         <div className='dark:text-gray-400'>
                         <p className='mt-3'>Keep track of build activity across your whole team.</p>
                        <p className="py-6 text-justify">Deplify can automate builds of your site each time you push a change to your Git repo. Once your team starts deploying, you will see a summary of your team activity, a list of deployed builds and their status here. Use the power of deploy previews, staging sites for each branch, and custom webhook integrations—all included with your account.</p>
                        <h3 className='font-bold text-green-800 text-lg dark:text-orange-500'>Learn more about builds</h3>
                         </div>
                        <button className="builds-button px-4 py-2 rounded-lg font-semibold my-5 dark:bg-lime-600 dark:text-black">New site from Git</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;