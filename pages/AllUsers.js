import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import Loading from '../Components/Shared/Loading';



const AllUsers = () => {
    const [myAd, setMyAd] = useState([]);
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://deplefy-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

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
                    toast.success(` ${user.name} deleted Successfully`)
                }
            })
    }
    // if (isLoading) {
    //     return <Loading></Loading>
    // }




    return (
        <div className='md:max-w-[1140px] md:mx-auto dark:text-black my-10'>
            <h2 className="md:text-3xl dark:text-white pl-3 md:pl-0 mb-5">All Users</h2>
            <div className="overflow-hidden dark:bg-slate-900">
                <table className="table w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Verification</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='dark:text-black'>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <td className='font-bold ' data-label="SL.No">{i + 1}</td>
                                <td data-label="NAME">{user.name}</td>
                                <td data-label="EMAIL">{user.email}</td>
                                <td data-label="USER TYPE" className='font-bold teamNameColor'>{user.userType}</td>
                                <td data-label="VERIFICATION">
                                    <label
                                        onClick={() => handleUserStatusUpdate(user._id)}
                                        className=" p-2 rounded-lg font-bold bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-tr dark:from-lime-900 dark:to-lime-600 dark:text-black btn-xs" htmlFor="confirmation-modal" >{user.status ? user.status : 'Not Verified'}</label>
                                </td>
                                <td data-label="ADMIN">{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td data-label="ACTION"><button onClick={() => handleUserDelete(user)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;