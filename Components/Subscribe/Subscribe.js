import Image from "next/image";


const Subscribe = () => {
    return (
        <div>
            <div className="flex flex-col items-center mb-20 ">
                <div className="w-20 mb-5 rounded">
                    <img src="https://i.ibb.co/5GgkG1j/removebg-preview.png" />
                </div>
                <h1 className="text-black font-semibold">Stay up to date with all Jamstack & Deplipy news</h1>
                <div className=" flex items-center mt-4">
                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered md:pr-32 mr-1" />
                    <button className="subscribe-button py-3 px-6 rounded-lg">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;