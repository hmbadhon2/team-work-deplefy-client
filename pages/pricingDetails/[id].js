import { motion, spring } from "framer-motion"
import Image from 'next/image';
import { useContext, useEffect } from "react";
import { ShareContext } from "../../ShareProvider/ShareProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from '../../Components/Checkout/CheckoutFrom';
import {Player} from '@lottiefiles/react-lottie-player'



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
console.log(stripePromise)


const buttonVariants = {
  hover: {
      scale: 1.1
  }
}

const pricingDetails = ({pricingData}) => {
    const {text, money, month, categorie_one, categorie_two, categorie_three, categorie_four, categorie_five } = pricingData;
    const{profileImage}=useContext(ShareContext);
    console.log(pricingData)


    return (
        <div className='md:max-w-[1140px] md:mx-auto my-12 md:border md:dark:border-white border-black bg-white  dark:bg-black dark:text-white  p-4'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
         <div>
         <div>
         <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
                whileHover="hover"
            >
                <div className="my-4 border border-blue-700  md:my-0 pricing shadow-2xl flex flex-col p-6 space-y-6 rounded sm:p-8 dark:text-black">
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

                </div>
            </motion.div>
  
          </div>
         </div>
         <div className='col-span-2 bg-white dark:bg-black'>
     
  <div className="overflow-hidden px-4 ">
  <div className="mb-10 pl-4">
     <h1 className="text-3xl font-bold">Pay to Money</h1>

     </div>
     <div className="flex justify-items-start ml-4">
     <Player className='w-72'
				autoplay
				loop
				src="https://assets3.lottiefiles.com/temporary_files/kDwQlh.json"></Player>
     </div>
      <table className="w-full text-left">
          <thead className="text-xs  uppercase bg-gray-100  ">
          </thead>
          <tbody>
              <tr className="">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                    Cardholder Name:
                  </th>
    
                  <td className="px-6 py-4">
                      {profileImage[0]?.name}
                  </td>
              </tr>
              <tr>
                  <th scope="row" className="px-6 py-2 font-medium whitespace-nowrap">
                  Package:
                  </th>
            
                  <td className="px-6 py-2">
                 {text}
                  </td>
              </tr>
              <tr>
                  <th scope="row" className="px-6 py-2 font-medium whitespace-nowrap">
                      Email:
                  </th>
                
                  <td className="px-6 py-2">
                     {profileImage[0]?.email}
                  </td>
              </tr>
              <tr>
                  <th scope="row" className="px-6 py-2 font-medium whitespace-nowrap">
                  Monthly total:
                  </th>
                
                  <td className="px-6 py-2">
                      ${pricingData?.money}
                  </td>
              </tr>
          </tbody>
      </table>
     
        
  <div className="mt-5">
  <Elements stripe={stripePromise}>
      
      <CheckoutFrom  pricingData={pricingData}/>
    </Elements>
  </div>

      {/* <button type="button" className="text-white ml-4 font-bold mt-6 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 dark dark:bg-gradient-to-r dark:from-lime-400 dark:via-lime-400 dark:to-lime-500 dark:hover:bg-gradient-to-br dark:focus:ring-4 dark:focus:outline-none   rounded-lg px-5 py-2.5 text-center mr-2 mb-2"> <label htmlFor="my-modal-4" className="">Add to Card</label></button> */}
  </div>
  
         </div>
        </div>
      </div>
    );
};


export async function getServerSideProps({params:{id}}) {
    const res=await fetch(`https://deplefy-server.vercel.app/pricing/${id}`)
    const data=await res.json()
  return {
    props: {
        pricingData: data
    }, 
  }
}

export default pricingDetails;