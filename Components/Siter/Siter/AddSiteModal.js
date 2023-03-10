import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthContext';




const AddSiteModal = ({siteLoad}) => {
    const{user}=useContext(AuthContext);
   


  const date= new Date();

    const handleAddSite = (event) => {
        event.preventDefault()
        console.log(event)
        const form=event.target;
        const name= form.name.value;
        const id=form.id.value;
        const image=form.image.value;
        const website=form.website.value;

        // console.log(name, id, date, image, website)

        const addSiteData={
            name,
            id,
            date,
            image,
            website,
        }
       

        fetch('https://deplefy-server.vercel.app/addNewSite',{
           method:"POST",
           headers:{
            "content-type": "application/json"
           },
           body:JSON.stringify(addSiteData)
        })
        .then((res)=>res.json())
        .then((data)=>{
            
            toast.success("Succesful Data");
            siteLoad();
            form.reset();
           
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


                    <div className="form-control w-full mt-6 ">
                            <label className="label"> <span className="label-text font-serif text-sm">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full mb-3" required /> 
                        </div>



                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text font-serif text-sm">Id Number</span>
                            </label>
                            <input type="text" name='id' placeholder="Id" className="input input-bordered w-full mb-3 " required />
                        </div>
                       
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text font-serif text-sm">Image Url</span>
                            </label>
                            <input type="text" name='image' placeholder="Image url" className="input input-bordered w-full mb-3 " required />
                        </div>


                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text font-serif text-sm">Website link</span>
                            </label>
                            <input type="text" name='website' placeholder="Website Link " className="input input-bordered w-full mb-3 " required/>
                        </div>
                        



                        




                        <div className='w-full text-center mt-6'>
                            <button type='submit' className="builds-button  dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black font-bold py-2 w-full hover:bg-purple-600">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddSiteModal;