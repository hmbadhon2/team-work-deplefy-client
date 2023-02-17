import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import { ShareContext } from '../../ShareProvider/ShareProvider';

const UpdateUserModal = ({refetch}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const{user}=useContext(AuthContext);

    const handleTeam = (data) => {

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

					const editTeam = {
						teamName: data?.team,
						email: user?.email,
						name: data?.slug,
						logo: imageData.data.url,
						current: data?.current,

					}
					fetch(`https://deplefy-server.vercel.app/team?email=${user?.email}`, {
						method: 'PUT',
						headers: {
							'content-type': 'application/json'
						},
						body: JSON.stringify(editTeam)
					})
						.then(res => res.json())
						.then(data => {
							toast.success('Team setting Edit is Successfully');
                            refetch();
							reset()
						})
				}
			})
	}
    return (
        <div className='dark:text-black'>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Team Information</h3>



                    <form onSubmit={handleSubmit(handleTeam)}>
                        <div className=''>
                            <div className="form-control w-full ">
                                <input placeholder='Team Name' type="text" required {...register("team", { required: 'Team Name is Required' })} className="input input-bordered w-full " />
                                {errors.team && <p role="alert" className='text-red-500'>{errors.team?.message}</p>}
                            </div>

                            <div className="form-control w-full my-5">
                                <input placeholder='Slug' type="text" required {...register("slug", { required: 'Name is Required' })} className="input input-bordered w-full " />
                                {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                            </div>
                            <div className="form-control w-full my-5">
                                <input placeholder='Image' type="file" required {...register("image", { required: 'Image is Required' })} className="input input-bordered w-full " />
                                {errors.image && <p role="alert" className='text-red-500'>{errors.image?.message}</p>}
                            </div>
                            <div className="form-control w-full my-5">
                                <input placeholder='Current plan' type="text" required {...register("current", { required: 'Country is Required' })} className="input input-bordered w-full " />
                                {errors.current && <p role="alert" className='text-red-500'>{errors.current?.message}</p>}
                            </div>
                            {/* <label htmlFor="my-modal-6"><button type='submit' className="btn w-full btn-info btn-sm">Submit</button></label> */}
                            <button type='submit' className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white  dark:bg-gradient-to-tr dark:from-lime-900 dark:to-lime-600 dark:text-black font-bold py-2 w-full"><label htmlFor="my-modal-3">Submit</label></button>
                        </div>
                    </form>

                </div>
            </div>
            
        </div>
    );
};

export default UpdateUserModal;