import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from "next/link";
import { Pagination } from 'antd';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';



const User = () => {
 


    const { user } = useContext(AuthContext)


    const [PayInformation, setPeyInformation] = useState([]);
    const [total, setTotal] = useState("")
    const [page, setPage] = useState(2)
    const [postPerPage, setPostPerPage] = useState(2)

    useEffect(() => {
        fetch('https://deplefy-server.vercel.app/users')
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

    const handleMakeAdmin = id => {
        fetch(`https://deplefy-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successful')
                    refetch()
                }
            })
    }

    const handleUserStatusUpdate = (id) => {
        fetch(`https://deplefy-server.vercel.app/users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Verified' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = myAd.filter(odr => odr._id !== id)
                    const approving = myAd.find(odr => odr._id === id)
                    // approving.status = 'verified'
                    const newOrders = [approving, ...remaining]
                    setMyAd(newOrders)
                    toast.success('Verification Successful')
                    refetch()

                }
            }
            )
    }






    const handleUserDelete = (user) => {
        fetch(`https://deplefy-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(` ${user?.name} deleted Successfully`)
                }
            })
    }





    return (
        <div className=' dark:text-black'>
            <h2 className="md:text-3xl font-bold dark:text-white pl-3 md:pl-0 mb-5">All Users</h2>
            <div>
                <div className="overflow-hidden hidden lg:flex shadow-md sm:rounded-lg">
                    <table className="w-full text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-indigo-200 dark:bg-slate-900 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    SL.No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                Verification
                            </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Admin
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-black dark:text-white'>
                            {
                                currentPosts.map((user, i) => <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {i + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {moment(user.date).format('lll')}
                                    </td>
                                    {/* <td className="px-6 py-4">
                                    <label
                                        onClick={() => handleUserStatusUpdate(user._id)}
                                        className=" p-2 rounded-lg font-bold bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black btn-xs" htmlFor="confirmation-modal" >{user.status ? user.status : 'Not Verified'}</label>
                                </td> */}
                                    <td className="px-6 py-4">
                                        {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => handleUserDelete(user)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>

                </div>



                <div className='lg:hidden'>
                    {
                        currentPosts?.map((user, i) =>
                            <div key={user._id} className="relative overflow-x-auto dark:text-white">
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
                                                {user.name}
                                            </td>

                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Email:
                                            </th>
                                            <td className="px-6 py-4">
                                                {user.email}
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                User Type:
                                            </th>
                                            <td className="px-6 py-4">
                                                {moment(user.date).format('lll')}
                                            </td>
                                        </tr>
                                        {/* <tr className="">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Verification:
                                        </th>
                                        <td className="px-6 py-4">
                                            <label
                                                onClick={() => handleUserStatusUpdate(user._id)}
                                                className=" p-2 rounded-lg font-bold bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black btn-xs" htmlFor="confirmation-modal" >{user.status ? user.status : 'Not Verified'}</label>
                                        </td>
                                    </tr> */}
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Admin:
                                            </th>
                                            <td className="px-6 py-4">
                                                {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Action:
                                            </th>
                                            <td className="px-6 py-4">
                                                <button onClick={() => handleUserDelete(user)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        )
                    }
                </div>
                <div className='flex justify-center mt-2'>

                    <Pagination onChange={(value) => setPage(value)}
                        pageSize={postPerPage}
                        total={total} current={page}
                        showSizeChanger
                        showQuickJumper
                        onShowSizeChange={onShowSizeChange}
                        itemRender={itemRender}
                    />

                </div>
            </div>
        </div>

    );

};

export default User;