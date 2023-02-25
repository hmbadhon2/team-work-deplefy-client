import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const UserDomain = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email)


    const handleSubmit = (event) => {
        event.preventDefault()
        const transferInput = event.target.transferInput.value;
        console.log(transferInput)
        fetch(`http://localhost:9000/transferDomain/${user?.email}`, {
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({transferInput})
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            toast.success("Succesfully Transfer Domain")
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div className=''>
            <h1 className='text-5xl text-center font-bold faq dark:text-lime-700'>Transfer Your Domain</h1>
            <h1 className='faq font-semibold text-center mt-5 dark:text-slate-500'>Enter the domain that you would like to transfer to Hostinger</h1>

            <form action="" onSubmit={handleSubmit}>
                <div className="flex justify-center items-center mt-4">
                    <input type="text" name="transferInput" placeholder="Enter the domain you want to transfer" className="input md:w-5/12 input-bordered mr-1 dark:text-black" />
                    <button className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black font-bold py-3 px-6 rounded-lg md:w-2/12">Transfer</button>
                    
                </div>
            </form>







            <div className=' w-full px-4'>
                <h1 className='text-4xl text-center font-semibold faq dark:text-lime-700 mt-40'>Why Transfer Your Domain?</h1>

                <div className=' grid grid-cols-1 md:grid-cols-3 gap-14 mt-16 mb-12 '>

                    <div>
                        <h1 className='faq dark:text-white text-2xl font-semibold'>User-Friendly Control Panel</h1>
                        <h1 className='faq dark:text-slate-500 mt-3'>Hostinger offers a wide variety of tools to satisfy advanced user and website developer needs, all in one place.</h1>
                    </div>


                    <div>
                        <h1 className='faq dark:text-white text-2xl font-semibold'>24/7 Chat Support</h1>
                        <h1 className='faq dark:text-slate-500 mt-3 font-serif '>Professional and hands-on. Our team of experts will solve technical issues to get your websites up and running. Anytime.</h1>
                    </div>


                    <div>
                        <h1 className='faq dark:text-white text-2xl font-semibold'>Simply Fast Websites</h1>
                        <h1 className='faq dark:text-slate-500 mt-3 '>Website speed can slow or grow your business. Delight your visitors with a lightning fast website.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDomain;