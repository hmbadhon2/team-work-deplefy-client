import React from 'react';
import { toast } from 'react-toastify';




const AddSiteModal = () => {



    const handleAddSite = (event) => {
        event.preventDefault()
        console.log(event)
        const name= event.target.name.value;
        const id=event.target.id.value;
        const date=event.target.date.value;
        const image=event.target.image.value;
        const website=event.target.website.value;

        // console.log(name, id, date, image, website)

        const addSiteData={
            name,
            id,
            date,
            image,
            website,
        }
       

        fetch('http://localhost:9000/addNewSite',{
           method:"POST",
           headers:{
            "content-type": "application/json"
           },
           body:JSON.stringify(addSiteData)
        })
        .then((res)=>res.json())
        .then((data)=>{
            
            toast.success("Succesful Data")
        })
        .catch((err)=>{
            toast.error("Sorry, Filed Post data")
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







                    <form action="" onSubmit={handleAddSite}>


                    <div className="form-control w-full mt-10 ">
                            <label className="label"> <span className="label-text font-serif text-sm">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full mb-3 " /> 
                        </div>



                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text font-serif text-sm">Id Number</span>
                            </label>
                            <input type="text" name='id' placeholder="Id" className="input input-bordered w-full mb-3 " />
                        </div>


                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text font-serif text-sm">Date</span>
                            </label>
                            <input type="text" name='date' placeholder="Month/date/your" className="input input-bordered w-full  mb-3" />
                        </div>
                       
                       
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text font-serif text-sm">Image Url</span>
                            </label>
                            <input type="text" name='image' placeholder="Image url" className="input input-bordered w-full mb-3 " />
                        </div>


                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text font-serif text-sm">Website link</span>
                            </label>
                            <input type="text" name='website' placeholder="Website Link " className="input input-bordered w-full mb-3 " />
                        </div>
                        



                        




                        <div className='w-full text-center mt-6'>
                            <button type='submit' className="btn w-full bg-sky-400 border-none hover:bg-purple-400 btn-sm">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddSiteModal;