import Image from "next/image";
import { useTheme } from "next-themes";
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";
import { useState } from "react";


const Banner = () => {
    const{theme, setTheme}=useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null;
		

    
    return (
        <div className="hero pb-5">
            <div className="hero-content flex-col md:flex-row-reverse">
              <div className=" md:w-1/2">
              <Image src="/hero-banner-removebg-preview.png" width={900} height={900}></Image>
              </div>
                <div className=" md:w-1/2">
                    <div className="text-4xl leading-8 md:text-6xl lg:text-6xl font-bold teamNameColor dark:text-lime-600">
                    <Typewriter
                        options={{
                            strings: ["Deploy Solution With Deplify."],
                            autoStart: true,
                            loop: true,
                           
                        }}
                    />
                    </div>
                    
                    <p className="py-6 leading-8 font-semibold text-lg  ">We make it easy to launch your business with the best pricing, hosting service, and 24/7 support.

</p>
                    

                     <div>
						{
					     theme =="dark"?<button className="bg-lime-600 text-black  px-7 py-3 font-semibold text-lg text-white rounded-full mr-5">Start 7 days Free Trial</button> : <button className=" bg-gradient-to-tr from-violet-900  to-blue-600  px-7 py-3 font-semibold text-lg text-white rounded-full mr-5">Start 7 days Free Trial</button>
						}
					</div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;