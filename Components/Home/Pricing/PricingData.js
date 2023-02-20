import React, { useContext } from 'react';
import { motion, spring } from "framer-motion"
import Image from 'next/image';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { AuthContext } from '../../../context/AuthContext';
const buttonVariants = {
    hover: {
        scale: 1.1
    }
}

const PricingData = ({ pricing, refetch }) => {
    const { user } = useContext(AuthContext)
    const { _id, text, money, month, categorie_one, categorie_two, categorie_three, categorie_four, categorie_five } = pricing;
    const handleBookingButton = (event) => {
        const bookings = {
            package: text,
            name: user?.displayName,
            money,
            email: user?.email,

        }
        fetch('https://deplefy-server-mocha.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Added to your Cart')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

    }


    return (
        <div className=''>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
                whileHover="hover"
            >
                <div className="my-4  md:my-0 pricing shadow-2xl flex flex-col p-6 space-y-6 rounded sm:p-8 dark:text-black">
                    <div className="space-y-2">
                        <div className="flex flex-row items-center mb-10">
                            <Image src="/Pricing Logo/Pricing_Reguler_logo-removebg-preview.png" width={80} height={80}></Image>
                            <h4 className="text-2xl font-bold mb-5 ml-3 text-indigo-900 dark:text-black">{text}</h4>
                        </div>
                        <p className="text-6xl font-bold text-indigo-900 dark:text-black">
                            <span>${money}
                                <span className="text-sm tracking-wide">/{month}</span>
                            </span>
                        </p>

                    </div>

                    <ul className="flex-1 space-y-2 leading-12 dark:text-black">
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black  text-lg font-semibold">{categorie_one}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">{categorie_two}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">{categorie_three}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">{categorie_four}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">{categorie_five}</span>
                        </li>
                    </ul>
                    {/* <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        onClick={() => handleBookingButton(_id)}
                        className="rounded py-3 px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 dark:bg-gradient-to-tr dark:from-black dark:to-black dark:text-white font-semibold text-lg">
                        Buy Now
                    </motion.button> */}

                <Link href={`/other/[id]`} as={`/other/${_id}`}>
                <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        // onClick={() => handleBookingButton(_id)}
                        className="rounded w-full py-3 px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 dark:bg-gradient-to-tr dark:from-black dark:to-black dark:text-white font-semibold text-lg">
                        Buy Now
                    </motion.button>
                </Link>
                </div>
            </motion.div>

        </div>
    );
};

export default PricingData;