import React from 'react';

const UserDomain = () => {
    return (
        <div className='my-20'>
            <h1 className='text-5xl text-center font-bold faq'>Transfer Your Domain</h1>
            <h1 className='faq font-semibold text-center mt-5'>Enter the domain that you would like to transfer to Hostinger</h1>

            <div className='mx-auto flex justify-center items-center mt-7 '>
            <input type="text" placeholder="Enter the domain you want to transfer" className="input input-bordered w-5/12 " />
            <button className="btn border-none w-2/12 text-white myBtn text-md">Transfer</button>
            </div>







            <div className=' w-full md:w-5/6 mx-auto'>
                <h1 className='text-4xl text-center font-semibold faq mt-40'>Why Transfer Your Domain?</h1>

                <div className=' grid grid-cols-1 md:grid-cols-3 gap-14 mt-16 mb-12 '>

                    <div>
                        <h1 className='faq text-2xl font-semibold'>User-Friendly Control Panel</h1>
                        <h1 className='faq mt-3'>Hostinger offers a wide variety of tools to satisfy advanced user and website developer needs, all in one place.</h1>
                    </div>


                    <div>
                        <h1 className='faq text-2xl font-semibold'>24/7 Chat Support</h1>
                        <h1 className='faq mt-3 font-serif '>Professional and hands-on. Our team of experts will solve technical issues to get your websites up and running. Anytime.</h1>
                    </div>


                    <div>
                        <h1 className='faq text-2xl font-semibold'>Simply Fast Websites</h1>
                        <h1 className='faq mt-3 '>Website speed can slow or grow your business. Delight your visitors with a lightning fast website.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDomain;