import React from 'react';
import {HiOutlineFire, HiCubeTransparent, HiStatusOnline} from "react-icons/hi";

const BestInterest = () => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 rounded text-black dark:text-white">
                    <div className=" flex items-center flex-col rounded p-10 text-center hover:bg-white dark:hover:bg-[#161111]" style={{transition: `2s`}}>
                        <HiCubeTransparent className='w-16 h-16'></HiCubeTransparent>
                        <h3 className="font-semibold text-2xl mb-4">Actine in Your Best Interest </h3> 
                        <p className="text-justify leading-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut similique fugiat eaque debitis. Rerum nisi culpa repellat sed adipisci..</p>
                    </div>
                    <div className=" flex items-center flex-col rounded p-10 text-center hover:bg-white dark:hover:bg-[#161111]" style={{transition: `2s`}}>
                       <HiStatusOnline className='w-16 h-16'></HiStatusOnline>
                        <h3 className="font-semibold text-2xl mb-4">Planning For the Future </h3> 
                        <p className="text-justify leading-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut similique fugiat eaque debitis. Rerum nisi culpa repellat sed adipisci..</p>
                    </div>
                    <div className=" flex items-center flex-col rounded p-10 text-center hover:bg-white dark:hover:bg-[#161111]" style={{transition: `2s`}}>
                        <HiOutlineFire className='w-16 h-16'></HiOutlineFire>
                        <h3 className="font-semibold text-2xl mb-4">Customer Value Chain </h3> 
                        <p className="text-justify leading-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut similique fugiat eaque debitis. Rerum nisi culpa repellat sed adipisci..</p>
                    </div>
             
            </div>
        </div>
    );
};

export default BestInterest;