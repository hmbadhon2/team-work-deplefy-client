import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const PayData = () => {
    const{user}= useContext(AuthContext)
    const{data: PayInformation=[]}=useQuery({
      queryKey: ['payData'],
      queryFn: async()=>{
        const res=await fetch(`http://localhost:9000/payments?email=${user?.email}`)
        const data= await res.json()
        return data;
      }
    })
    console.log(PayInformation)
    return (
        <div className='md:max-w-[1140px] md:mx-auto my-12'>
            
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
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
                transactionId
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
        {
                   PayInformation.map((pay, i)=><tr key={pay._id} className="text-black dark:text-white">
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
    );
};

export default PayData;