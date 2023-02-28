import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from "next/link";



const User = () => {
    const [myAd, setMyAd] = useState([]);
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://deplefy-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });


    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = users.slice(firstIndex, lastIndex)
    const npage = Math.ceil(users.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

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
            <h2 className="md:text-3xl dark:text-white pl-3 md:pl-0 mb-5">All Users</h2>
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
                                records.map((user, i) => <tr>
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
                        records?.map((user, i) =>
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
                <div className=''>
                    <ul className='page-item flex justify-center mt-2'>
                        <li className='page-item'>
                            <Link href="#" passHref className='page-link' onClick={prePage}>Prev</Link>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item mx-2  ${currentPage === n ? 'active' : ''}`} key={i} >
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

export default User;