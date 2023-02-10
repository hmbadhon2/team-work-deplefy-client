

const Domain = () => {
    return (
        <div className="rounded-3xl mt-12 bg-gradient-to-tr from-violet-900 to-blue-600 py-10">
            <div className="p-12 text-center">
                <h3 className="text-3xl text-white mb-10"> Do You Want Your Premium Domain?</h3>
                <form className="p-2 mx-24 bg-white rounded-full mb-10">
                    <div className="md:flex md:flex-row justify-between">
                        <input 
                         type="text" 
                         name="" 
                         id=""
                         placeholder="Type your domain address"
                         className="rounded-full px-10" 
                         />
                         
                        <input 
                         type="text" 
                         name="" 
                         id=""
                         placeholder="Type your domain address"
                         className="rounded-full px-10" 
                         />
                         <button className="rounded-full py-3 px-4 text-white bg-gradient-to-tr from-violet-900 to-blue-600 font-semibold text-lg">
                                Search Domain
                         </button>

                    </div>

                </form>
                <div className="mx-24 flex flex-row text-center justify-around text-white"> 
                        <h3><span className="text-black text-3xl mr-2">.net</span> $14.99</h3>
                        <h3><span className="text-cyan-400 text-3xl mr-2">.com</span> $14.99</h3>
                        <h3><span className="text-orange-500 text-3xl mr-2">.store</span> $14.99</h3>
                        <h3><span className="text-sky-500 text-3xl mr-2">.info</span> $14.99</h3>
                        <h3><span className="text-black text-3xl mr-2">.co</span> $14.99</h3>
                </div>
            </div>
        </div>
    );
};

export default Domain;