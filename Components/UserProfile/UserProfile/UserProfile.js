import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const UserProfile = () => {
	const { user } = useContext(AuthContext)
	return (
		<div>
			<div className="p-8 md:w-1/2 flex justify-between sm:space-x-6 shadow-lg dark:bg-gray-900 dark:text-gray-100">
				<div className="flex-shrink-0 mr-6 mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
				<img src={user?.photoURL} alt="" className="self-center flex-shrink-0 w-28 h-28 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
				</div>
				<div className="flex flex-col space-y-4">
					<div>
						<h2 className="text-2xl font-semibold">{user?.displayName}</h2>
						<span className=" dark:text-gray-400">{user?.email}</span>
					</div>
					<div className="space-y-1">
					    <h2>Joined Deflify on Jul 25, 2022 (6 months ago).</h2>
					    <h2>Created 22 sites. Collaborates on 1 team.</h2>
					</div>
				</div>
			</div>

			{/* ................................................. */}

			<div className="p-6 sm:p-12 dark:bg-gray-900 shadow-lg dark:text-gray-100 my-10">
	<div className="flex space-x-6 sm:flex-row">
		<img src={user?.photoURL} alt="" className="flex-shrink-0 w-24 h-24 border dark:bg-gray-500 dark:border-gray-700" />
		<div className="flex flex-col">
		<div className=''>

<h1 className='text-2xl md:text-3xl mb-5'>Personal information</h1>
<div className='flex '>

	<div>
		<h1 className='text-lg font-serif mb-3 '>Name:</h1>
		<h1 className='text-lg font-serif mb-3'>Team Name:</h1>
		<h1 className='text-lg font-serif mb-3'>Email:</h1>
		<h1 className='text-lg font-serif mb-3'>Phone:</h1>

	</div>


	<div className=''>
		{
			user?.uid ?
				<>
					<h1 className='ml-5 md:ml-12 mb-3 '>{user?.displayName}</h1>
					<h1 className='ml-5 md:ml-12 mb-3'>Tech Armie</h1>
					<h1 className='ml-5 md:ml-12 mb-3'>{user?.email}</h1>
					<h1 className='ml-5 md:ml-12 mb-3'>User Phone</h1>
				</>
				:
				<>
					<h1 className='ml-5 md:ml-12 mb-3 '>User Name</h1>
					<h1 className='ml-5 md:ml-12 mb-3'>Service Team</h1>
					<h1 className='ml-5 md:ml-12 mb-3'>User Email</h1>
					<h1 className='ml-5 md:ml-12 mb-3'>User Phone</h1>
				</>
		}

	</div>
</div>



{/* <button className="builds-button px-4 py-2 rounded-lg font-semibold dark:bg-info dark:text-black mt-10">Edit Team Information</button> */}

<label htmlFor="my-modal-3" className="builds-button px-4 py-2 rounded-lg font-semibold dark:bg-info dark:text-black">Edit</label>
</div>
		</div>
	</div>

</div>
		</div>
	);
};

export default UserProfile;