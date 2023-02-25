import moment from 'moment/moment';
import React from 'react';

const AllSite = ({ site }) => {
    console.log(site)
    const { image, website, date, id, name } = site;








    return (
        <div className='my-16 mx-2'>








            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-20'>

                <div className='md:flex  items-center'>

                    <img className='w-full h-64 md:w-1/3  md:h-28' src={image} alt="" />

                    <div className='ml-4 mt-6 md:mt-0 md:0'>
                        <h1 className='font-mono font-medium'>Depment id/ {id} </h1>
                        <h2 className='font-sans'>Manual Deploys</h2>
                    </div>

                </div>


                <div className='flex md:justify-end items-center'>
                    <div className='ml-4'>
                        <h1>Owned by
                            <span className='font-bold text-gray-700 ml-2'>{name}</span>

                        </h1>
                        <h2 className='font-serif'>Last Publish on <span className='font-mono'> {moment(date).format('L')} </span> </h2>
                    </div>
                </div>





                <div className=' ml-4 mt-4 md:mt-0 md:ml-auto flex md:justify-center lg:justify-end md:items-center'>
                    <button className="site-button  bg-gradient-to-tr from-violet-900  to-blue-600  text-white rounded-lg dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black">
                        <a> </a>
                        <a href={website} target="_blank" rel="noopener noreferrer">View site</a>
                    </button>
                </div>


            </div>














        </div>
    );
};

export default AllSite;