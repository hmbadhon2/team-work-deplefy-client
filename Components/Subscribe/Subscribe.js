import Image from "next/image";


const Subscribe = () => {
    return (
        <div>
             <div className="flex flex-col items-center mb-20 ">
             <Image src="/Perfect_unique_attractive_stylish_geometric_tech_PD_DP_P_D_initial_based_letter_icon_logo.-removebg-preview.png" width={200} height={100}></Image>


                <h1 className="font-sans font-normal">Stay up to date with all Jamstack & Deplipy news</h1>
                <div className=" flex items-center mt-4">
                <input type="email" placeholder="Email Address" className="input input-bordered mr-1" />
                    <button className="btn btn-outline btn-info ">Subscribe</button>
                </div>
             </div>
        </div>
    );
};

export default Subscribe;