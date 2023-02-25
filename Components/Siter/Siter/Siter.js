

import React, { useContext } from 'react';
import { ShareContext } from '../../../ShareProvider/ShareProvider';
// import { ShareContext } from '../../../ShareProvider/ShareProvider';
import AddSiteModal from './AddSiteModal';
import AllSite from './AllSite';


const Siter = () => {
    const { siteData, siteLoad } = useContext(ShareContext)








    return (
        <div className='my-16 mx-2'>


            <div className='flex md:justify-between items-center'>
                <input type="search" name="search" id="" placeholder='Search site' className="input input-bordered w-60 md:w-80 dark:text-black" />


                <div className="dropdown">

                    <label tabIndex={0} className="new-site bg-gradient-to-tr from-violet-900  to-blue-600  text-white rounded-lg dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black m-1 py-16 px-5">Add New Site</label>
                    <ul tabIndex={0} className="dropdown-content menu mt-4 p-2 shadow  rounded-box md:w-52">
                        <label htmlFor="my-modal-3" className='font-serif ml-3'>Deploy Manually</label>
                        <li><a className='font-serif'>Tamplate</a></li>

                    </ul>
                </div>

            </div>



            <div>

                {
                    siteData.map((site, i) => <AllSite
                        key={i}
                        site={site}
                    ></AllSite>)
                }
            </div>








            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600 ">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class=" text-gray-500 dark:text-gray-400">Want to deploy a new site without connecting to Git?</p>
                        <p class=" text-gray-500 dark:text-gray-400">Drag and drop your site output folder here</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Or <span class="font-semibold">browse to upload</span></p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>


            <div>
                <AddSiteModal siteLoad={siteLoad}></AddSiteModal>
            </div>





        </div>
    );
};

export default Siter;




