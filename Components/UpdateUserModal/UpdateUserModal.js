import React from 'react';

const UpdateUserModal = () => {
    return (
        <div className='dark:text-black'>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Team Information</h3>
                


                <form action="">
                <input type="text" placeholder="Name" className="input input-bordered w-full mb-3 mt-8" />
                <input type="text" placeholder="Email" className="input input-bordered w-full mb-3 " />
                <input type="text" placeholder="Phone" className="input input-bordered w-full  mb-3" />
                <input type="text" placeholder="Address" className="input input-bordered w-full mb-3 " />
                

                <div className='w-full text-center mt-6'>
                <button type='submit' className="btn w-1/2  btn-sm">Submit</button>
                </div>
                </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateUserModal;