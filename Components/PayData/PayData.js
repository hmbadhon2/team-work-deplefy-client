import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Link from "next/link";
import { Pagination } from 'antd';
import { current } from 'daisyui/src/colors';

const PayData = () => {
    const { user } = useContext(AuthContext)


    const [PayInformation, setPeyInformation] = useState([]);
    const [total, setTotal] = useState("")
    const [page, setPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(3)

    useEffect(() => {
        fetch(`https://deplefy-server.vercel.app/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPeyInformation(data);
                setTotal(data.length)
            })
    }, [])


    const indexofLastPage = page + postPerPage;
    const indexofFirstPage = indexofLastPage - postPerPage;
    const currentPosts = PayInformation.slice(indexofFirstPage, indexofLastPage);

    const onShowSizeChange = (current, pageSize) => {
        setPostPerPage(pageSize)
    }


    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>
        }
        if (type === 'next') {
            return <a>Next</a>
        }
        return originalElement;
    }
    return (
        <div>
            <h2 className="md:text-3xl font-bold dark:text-white pl-3 md:pl-0 mb-5">My Pay Information</h2>
            <div>
                <div>
                    <div className="overflow-hidden hidden lg:flex">

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-900 bg-indigo-200 dark:bg-slate-900 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-2 py-3">
                                        SL.No
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        TransactionId
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts?.map((pay, i) => <tr key={pay._id} className="text-black dark:text-white">
                                        <td className="px-2 py-4">
                                            {i + 1}
                                        </td>
                                        <td className="px-2 py-4">
                                            {pay.name}
                                        </td>
                                        <td className="px-2 py-4">
                                            {moment(pay.date).format('LLL')}
                                        </td>
                                        <td className="px-2 py-4">
                                            {pay.transactionId}
                                        </td>
                                        <td className="px-2 py-4">
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
                        currentPosts?.map((pay, i) =>
                            <div key={pay._id} className="">
                                <table className="w-full shadow-md text-sm text-left my-5">

                                    <tbody >
                                        <tr className="">
                                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                SL.No:
                                            </th>
                                            <td className="px-2 py-4">
                                                {i + 1}
                                            </td>

                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Name:
                                            </th>
                                            <td className="px-2 py-4">
                                                {pay.name}
                                            </td>

                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Date:
                                            </th>
                                            <td className="px-2 py-4">
                                                {moment(pay.date).format('LLL')}
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                TransactionId:
                                            </th>
                                            <td className="px-2 py-4">
                                                {pay.transactionId}
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Price:
                                            </th>
                                            <td className="px-2 py-4">
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
            <div className='flex justify-center'>

                <Pagination onChange={(value) => setPage(value)}
                    pageSize={postPerPage}
                    total={total} current={page}
                    showSizeChanger
                    // showQuickJumper
                    onShowSizeChange={onShowSizeChange}
                    itemRender={itemRender}
                />

            </div>
        </div>
    );


};

export default PayData;