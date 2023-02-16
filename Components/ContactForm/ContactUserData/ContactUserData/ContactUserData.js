import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';

const ContactUserData = ({ contactUser }) => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div className="flex items-center p-2 space-x-4">

                {
                    contactUser?.image ?
                        <div className="relative flex-shrink-0">
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 border rounded-full dark:border-gray-900"></span>
                            <img src={contactUser.image} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        :
                        <>
                            <div className="relative flex-shrink-0">
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 border rounded-full  dark:border-gray-900"></span>
                                <img src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg' alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>

                        </>
                }

                <div>
                    <h2 className="text-lg font-semibold">{contactUser.name}</h2>
                    <span className="flex items-center space-x-1">
                        <Link href="/Profile" passHref rel="noopener noreferrer" className="text-xs hover:underline ">View profile</Link>
                    </span>
                </div>
            </div>
    
        </div>
    );
};

export default ContactUserData;