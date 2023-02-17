

const Domain = () => {
    return (
        <div className="rounded-3xl mt-12  bg-gradient-to-tr from-violet-900 to-blue-600 dark:bg-gradient-to-tr dark:from-lime-900 dark:to-lime-600 py-10">
            <div className="p-12 text-center">
                <h3 className="text-3xl text-white font-semibold dark:text-black mb-10"> Do You Want Your Premium Domain?</h3>
                <form className="p-5 rounded-3xl md:p-2  md:mx-24 bg-white md:rounded-full mb-10">
                    <div className="md:flex md:flex-row justify-between">
                        <input 
                         type="text" 
                         name="" 
                         id=""
                         placeholder="Type your domain address"
                         className="w-80 rounded-full p-2 md:w-64 bg-slate-100 my-4 md:my-0" 
                         />
                         
                        <input 
                         type="text" 
                         name="" 
                         id=""
                         placeholder="Type your domain address"
                         className="w-80 rounded-full p-2 md:w-64 bg-slate-100" 
                         />
                         <button className="rounded-full my-4 md:my-0 py-3 px-8 md:px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 dark:bg-gradient-to-tr dark:from-lime-800 dark:to-lime-500 font-semibold text-lg">
                                Search Domain
                         </button>

                    </div>

                </form>
                <div className="mx-24 flex flex-row text-center justify-around text-white"> 
                        <h3><span className="text-black text-3xl mr-2">.net</span> $14.99</h3>
                        <h3><span className="text-cyan-400 dark:text-red-800 text-3xl mr-2">.com</span> $14.99</h3>
                        <h3><span className="text-orange-600 text-3xl mr-2">.store</span> $14.99</h3>
                        <h3><span className="text-sky-500 dark:text-red-800 text-3xl mr-2">.info</span> $14.99</h3>
                        <h3><span className="text-black text-3xl mr-2">.co</span> $14.99</h3>
                </div>
            </div>
        </div>
    );
};

export default Domain;