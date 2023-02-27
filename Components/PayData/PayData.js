import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const PayData = () => {
    const{user}= useContext(AuthContext)
    const{data: PayInformation=[]}=useQuery({
      queryKey: ['payData', user?.email],
      queryFn: async()=>{
        const res=await fetch(`https://deplefy-server.vercel.app/payments?email=${user?.email}`)
        const data= await res.json()
        return data;
      }
    })
    return (
        <div>
            <h2 className="md:text-3xl dark:text-white pl-3 md:pl-0 mb-5">My Pay Information</h2>
      <div>     
<div className="relative overflow-x-auto hidden lg:flex">

    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 bg-indigo-200 dark:bg-slate-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   SL.No
                </th>
                <th scope="col" className="px-6 py-3">
                   Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Date
                </th>
                <th scope="col" className="px-6 py-3">
                TransactionId
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
        {
                   PayInformation?.map((pay, i)=><tr key={pay._id} className="text-black dark:text-white">
                   <td className="px-6 py-4">
                       {i+1}
                   </td>
                   <td className="px-6 py-4">
                       {pay.name}
                   </td>
                    <td className="px-6 py-4">
                       {moment(pay.date).format('LLL')}
                   </td>
                   <td className="px-6 py-4">
                       {pay.transactionId}
                   </td>
                   <td className="px-6 py-4">
                       ${pay.money}
                   </td>
               </tr>)
                    
                   } 
          
        </tbody>
    </table>
</div>
</div> 

<div className='lg:hidden'>
{
    PayInformation?.map((pay, i)=>
        <div key={pay._id} className="">
            <table className="w-full shadow-md text-sm text-left my-5">
              
                <tbody >
                    <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        SL.No:
                        </th>
                        <td className="px-6 py-4">
                          {i+1}
                        </td>
                     
                    </tr>
                    <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Name:
                        </th>
                        <td className="px-6 py-4">
                        {pay.name}
                        </td>

                    </tr>
                    <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Date:
                        </th>
                        <td className="px-6 py-4">
                        {moment(pay.date).format('LLL')}
                        </td>
                    </tr>
                    <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        TransactionId:
                        </th>
                        <td className="px-6 py-4">
                        {pay.transactionId}
                        </td>
                    </tr>
                    <tr className="">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Price:
                        </th>
                        <td className="px-6 py-4">
                        {pay.money}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}
</div>
        </div>
    );
};

export default PayData;