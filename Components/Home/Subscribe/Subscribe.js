import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";


const Subscribe = () => {
    const{theme, setTheme}=useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null;

    
    return (
        <div>
            <div className="flex flex-col items-center mb-20 ">
                <div className="w-20 mb-5 rounded">
                    {
                        theme==="dark"? <img src="https://i.ibb.co/D7cSDrm/Perfect-unique-attractive-stylish-geometric-tech-PD-DP-P-D-initial-based-letter-icon-logo-removebg-p.png" /> : <img src="https://i.ibb.co/QXx4dzT/Perfect-unique-attractive-stylish-geometric-tech-PD-DP-P-D-initial-based-letter-icon-logo-removebg-p.png" /> 
                    }
                   
                </div>
                <h1 className="text-black font-semibold dark:text-white">Stay up to date with all Jamstack & Deplify news</h1>
                <div className=" flex items-center mt-4">
                    <input type="email" name="email" placeholder="Email Address" className="input md:w-80 input-bordered mr-1 dark:text-black" />
                    <button className="bg-gradient-to-tr from-violet-900  to-blue-600  text-white dark:bg-gradient-to-tr dark:from-lime-900 dark:to-lime-600 dark:text-black font-bold py-3 px-6 rounded-lg">Subscribe</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Subscribe;