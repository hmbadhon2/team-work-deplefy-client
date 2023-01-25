import Image from "next/image";


const Subscribe = () => {
    return (
        <div>
            <div className="flex flex-col items-center mb-20 ">
                <div className="w-20 mb-5 rounded">
                    <img src="https://i.ibb.co/hRPJLC7/1-removebg-preview.png" />
                </div>
                <h1 className="text-black font-semibold dark:text-white">Stay up to date with all Jamstack & Deplify news</h1>
                <div className=" flex items-center mt-4">
                    <input type="email" name="email" placeholder="Email Address" className="input md:w-80 input-bordered mr-1 dark:text-black" />
                    <button className="subscribe-button dark:bg-orange-700 dark:text-black py-3 px-6 rounded-lg">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;