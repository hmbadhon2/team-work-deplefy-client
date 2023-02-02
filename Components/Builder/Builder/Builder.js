import React from 'react';
import Image from 'next/image';

const Builder = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
                    <div className='w-2/2 relative my-16'>
                    <Image src="/builds.png" width={2700} height={2700}></Image>
                   
                    </div>
                   
                    <div>
                        <h1 className="text-5xl font-bold">Builds</h1>
                        <p className='mt-3'>Keep track of build activity across your whole team.</p>
                        <p className="py-6 text-justify">Deplify can automate builds of your site each time you push a change to your Git repo. Once your team starts deploying, you will see a summary of your team activity, a list of deployed builds and their status here. Use the power of deploy previews, staging sites for each branch, and custom webhook integrations—all included with your account.</p>
                        <h3 className='font-bold text-lg'>Learn more about builds</h3>
                        <button className="builds-button px-4 py-2 rounded-lg font-semibold my-5 dark:bg-info dark:text-black">New site from Git</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;