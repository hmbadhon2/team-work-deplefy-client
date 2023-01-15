import Image from "next/image";


const Subscribe = () => {
    return (
        <div>
             <div className="flex flex-col items-center mb-20 ">
             <Image src="/removebg-preview.png" width={200} height={100}></Image>


                <h1 className="font-sans font-normal">Stay up to date with all Jamstack & Deplipy news</h1>
                <div className=" flex items-center mt-4">
                <input type="email" placeholder="Email Address" className="input input-bordered mr-1" />
                    <button className="manu-button py-2 px-6 rounded-2xl">Subscribe</button>
                </div>
             </div>
        </div>
    );
};

export default Subscribe;