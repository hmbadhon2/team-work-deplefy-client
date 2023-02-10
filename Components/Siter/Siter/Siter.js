

import React, { useContext, useEffect, useState } from 'react';
import AllSite from './AllSite';


const Siter = () => {
    const [siteData, setSiteData] = useState([])

    useEffect(() => {
        fetch('https://deplefy-server.vercel.app/addNewSite')
            .then((res) => res.json())
            .then((data) => setSiteData(data))
    }, [])







    return (
        <div className='my-16 mx-2'>


            <div className='flex md:justify-between items-center'>
                <input type="search" name="search" id="" placeholder='Search site' className="input input-bordered w-60 md:w-80 dark:text-black" />


                <div className="dropdown">

                    <label tabIndex={0} className="new-site rounded-lg dark:bg-info dark:text-black m-1 py-16 px-5">Add New Site</label>
                    <ul tabIndex={0} className="dropdown-content menu mt-4 p-2 shadow bg-white dark:bg-black dark:text-white rounded-box md:w-52 dark:text-black">
                        <label htmlFor="my-modal-3" className='font-serif ml-3'>Deploy Manually</label>
                        <li><a className='font-serif'>Tamplate</a></li>

                    </ul>
                </div>

            </div>










            {
                siteData.map((site, i) => <AllSite
                    key={i}
                    site={site}
                ></AllSite>)
            }








            <div className='flex flex-col justify-center items-center dragAndDrop mt-10 py-14'>
                <h1 className='text-gray-500' >Want to deploy a new site without connecting to Git?</h1>
                <h2 className='text-gray-500'>Drag and drop your site output folder here</h2>
                <h3 className='text-gray-500'>Or, browse to upload</h3>
            </div>









        </div>
    );
};

export default Siter;




