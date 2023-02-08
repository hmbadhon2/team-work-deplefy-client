import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';

const UserProfile = () => {
	const { user, refetch:load } = useContext(AuthContext);
	const { register, handleSubmit, reset, formState: { errors } } = useForm();


	// const imgHost = d0ee0f160648d3906c64599f51fb220b

	const { data: profileData = [], refetch } = useQuery({

		queryKey: ['profileDatabase', user?.email],
		queryFn: async () => {
			const res = await fetch(`https://deplefy-server.vercel.app/profile?email=${user?.email}`)
			const data = await res.json();
			return data;
		}
	})

	const handleEditProfile = (data) => {

		const image = data.image[0];
		console.log(data.image)
		const formData = new FormData();
		formData.append('image', image);
		const uri = `https://api.imgbb.com/1/upload?expiration?=600&key=33de90de0d198f3c751547fa3dc96a5e`
		fetch(uri, {
			method: 'POST',
			body: formData
		})
			.then(res => res.json())
			.then(imageData => {
				if (imageData.success) {

					const editProfile = {
						sellerName: user?.displayName,
						email: user?.email,
						name: data?.name,
						team: data?.team,
						image: imageData.data.url,
						phone: data?.phone,

					}
					fetch(`https://deplefy-server.vercel.app/profile?email=${user?.email}`, {
						method: 'PUT',
						headers: {
							'content-type': 'application/json'
						},
						body: JSON.stringify(editProfile)
					})
						.then(res => res.json())
						.then(data => {
							toast.success('Profile Edit is Successfully');
							refetch();
							load()
							reset()
						})
				}
			})
	}


	return (
		<div>
			<div className="mx-3 p-8 md:w-1/2 border  flex justify-between sm:space-x-6 shadow-lg  dark:text-gray-100">

				<div className="flex flex-col space-y-4">
					<div className=''>
					{profileData[0]?.name? <h2 className="text-2xl font-semibold">{profileData[0]?.name}</h2> : <h2 className="text-2xl font-semibold">{user?.displayName}</h2>}
					{profileData[0]?.email? <span className=" dark:text-gray-400">{profileData[0]?.email}</span> : <span className=" dark:text-gray-400">{user?.email}</span>}
						
					</div>
					<div className="space-y-1">
						<h2>Joined Deflify on {moment(profileData[0]?.date).format('LL')} ({moment(profileData[0]?.date).startOf('hour').fromNow()}). Created 22 sites. Collaborates on {profileData?.length ? profileData?.length : 1} team.</h2>
					</div>
				</div>
				<div className="flex-shrink-0 md:mr-6 mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
					<div>
					{profileData[0]?.image? <img src={profileData[0]?.image} alt="" className="self-center flex-shrink-0 w-16 h-16 md:w-28 md:h-28 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />: 
					<div>
						{
							user?.photoURL? <img src={user?.photoURL} alt="" className="self-center flex-shrink-0 w-16 h-16 md:w-28 md:h-28 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" /> : <img src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg' alt="" className="self-center flex-shrink-0 w-16 h-16 md:w-28 md:h-28 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
						}
					</div>
					}
					</div>
					

				</div>
			</div>

			{/* ................................................. */}
			<div className='mb-5 mt-16 mx-3'>
				<div>
					<h1 className='text-3xl'>Profile</h1>
					<p>Your personal information</p>
				</div>
			</div>
			<div className="px-2 py-6 mx-3 md:px-6 border shadow-lg dark:text-gray-100 mb-10">
				<div className="flex sm:flex-row">
				
					<div className="flex flex-col">
						<div className=''>

							<h1 className='text-2xl md:text-3xl mb-5'>Personal information</h1>
							<div className='flex justify-center mb-3'>
							{profileData[0]?.image ? <img src={profileData[0]?.image} alt="" className="md:hidden flex-shrink-0 border w-20 h-20 md:w-28 md:h-28 dark:bg-gray-500 dark:border-gray-700" />
							: 
							<div>
								{user?.photoURL? <img src={user?.photoURL} alt="" className="md:hidden flex-shrink-0 border w-20 h-20 md:w-28 md:h-28 dark:bg-gray-500 dark:border-gray-700" /> : <img src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg' alt="" className="md:hidden flex-shrink-0 border w-20 h-20 md:w-28 md:h-28 dark:bg-gray-500 dark:border-gray-700" />}
							</div>
							}
							
							
							</div>
							<div className='flex'>
							{profileData[0]?.image ? <img src={profileData[0]?.image} alt="" className="hidden md:flex flex-shrink-0 border w-16 h-16 md:w-28 md:h-32 mr-2 md:mr-6 dark:bg-gray-500 dark:border-gray-700" /> : 
							<div>
							{user?.photoURL? <img src={user?.photoURL} alt="" className="hidden md:flex flex-shrink-0 border w-16 h-16 md:w-28 md:h-32 mr-2 md:mr-6 dark:bg-gray-500 dark:border-gray-700" /> : <img src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg' alt="" className="hidden md:flex flex-shrink-0 border w-16 h-16 md:w-28 md:h-32 mr-2 md:mr-6 dark:bg-gray-500 dark:border-gray-700" />}
							</div>
							}

							
							
								<div>
									<h1 className='pl-5 md:pl-0 mb-3 '>Name:</h1>
									<h1 className='pl-5 md:pl-0 mb-3'>Email:</h1>
									<h1 className='pl-5 md:pl-0 mb-3'>Phone:</h1>

								</div>


								<div className=''>
									{
										user?.uid ?
										
											<>  
											    {profileData[0]?.name ? <h1 className='ml-5 md:ml-12 mb-3 '>{profileData[0]?.name}</h1> : <h1 className='ml-5 md:ml-12 mb-3 '>{user?.displayName}</h1>}
											    {profileData[0]?.email ? <h1 className='ml-5 md:ml-12 mb-3 '>{profileData[0]?.email}</h1> : <h1 className='ml-5 md:ml-12 mb-3 '>{user?.email}</h1>}
											    {profileData[0]?.phone ? <h1 className='ml-5 md:ml-12 mb-3 '>{profileData[0]?.phone}</h1> : <h1 className='ml-5 md:ml-12 mb-3 '>User Phone</h1>}
											</>
											:
											<>
												<h1 className='ml-5 md:ml-12 mb-3 '>User Name</h1>
												<h1 className='ml-5 md:ml-12 mb-3'>User Email</h1>
												<h1 className='ml-5 md:ml-12 mb-3'>User Phone</h1>
											</>
									}

								</div>
							</div>

							{/* ....................................... */}

							<div className='mt-5'>
								<label htmlFor="my-modal-6" className="builds-button ml-5 md:ml-0 px-4 py-2 rounded-lg font-semibold dark:bg-info dark:text-black">Edit Profile</label>
								<div className='dark:text-black dark:bg-black'>
									{/* The button to open modal */}


									{/* Put this part before </body> tag */}
									<input type="checkbox" id="my-modal-6" className="modal-toggle" />
									<div className="modal">
										<div className="modal-box relative">
											<label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
											<h3 className="text-lg font-bold mb-5">Edit Information</h3>

											<form onSubmit={handleSubmit(handleEditProfile)}>
											 <div className=''>
											 <div className="form-control w-full ">
													<input placeholder='Name' type="text" required {...register("name", { required: 'Name is Required' })} className="input input-bordered w-full " />
													{errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
												</div>
												<div className="form-control w-full my-5">
													<input placeholder='Image' type="file" required {...register("image", { required: 'Image is Required' })} className="input input-bordered w-full " />
													{errors.image && <p role="alert" className='text-red-500'>{errors.image?.message}</p>}
												</div>
												<div className="form-control w-full ">
													<input placeholder='Email Id' type="email" defaultValue={user?.email} readOnly required {...register("email")} className="input input-bordered w-full " />
													{errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
												</div>
												<div className="form-control w-full my-5">
													<input placeholder='Phone Number' type="number" required {...register("phone", { required: 'Phone Number is Required' })} className="input input-bordered w-full " />
													{errors.number && <p role="alert" className='text-red-500'>{errors.number?.message}</p>}
												</div>
												{/* <label htmlFor="my-modal-6"><button type='submit' className="btn w-full btn-info btn-sm">Submit</button></label> */}
											<button type='submit' className="btn w-full btn-info btn-sm"><label htmlFor="my-modal-6">Submit</label></button>
											 </div>
											</form>

										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default UserProfile;