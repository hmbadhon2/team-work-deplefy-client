import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Link from "next/link";

const PayData = () => {
    const { user } = useContext(AuthContext)
    const { data: PayInformation = [] } = useQuery({
        queryKey: ['payData', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://deplefy-server.vercel.app/payments?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = PayInformation.slice(firstIndex, lastIndex)
    const npage = Math.ceil(PayInformation.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    return (
        <div>
            <h2 className="md:text-3xl font-bold dark:text-white pl-3 md:pl-0 mb-5">My Pay Information</h2>
            <div>
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
                                    records?.map((pay, i) => <tr key={pay._id} className="text-black dark:text-white">
                                        <td className="px-6 py-4">
                                            {i + 1}
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
                        records?.map((pay, i) =>
                            <div key={pay._id} className="">
                                <table className="w-full shadow-md text-sm text-left my-5">

                                    <tbody >
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                SL.No:
                                            </th>
                                            <td className="px-6 py-4">
                                                {i + 1}
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
            <div className=''>
                    <ul className='page-item flex justify-center dark:text-white mt-2'>
                        <li className='page-item'>
                            <Link href="#" passHref className='page-link' onClick={prePage}>Prev</Link>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item mx-2 ${currentPage === n ? 'active' : ''}`} key={i} >
                                    <Link href="" passHref className='page-item' onClick={() => changeCPage(n)}>{n}</Link>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <Link href="#" passHref className='page-link' onClick={nextPage}>Next</Link>
                        </li>
                    </ul>


                </div>
        </div>
    );

    function prePage() {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCPage(_id) {
        setCurrentPage(_id)
    }
    function nextPage() {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
    }
};

export default PayData;