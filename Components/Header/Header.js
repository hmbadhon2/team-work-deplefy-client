import Image from "next/image";
import { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<header className="py-4 dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex justify-between h-16">
					<div className="flex">
						<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
							<Image src="/removebg-preview.png" width={150} height={150}></Image>
						</a>
						<ul className="items-stretch  blog hidden md:flex">
							<li className="flex">
								<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 font-bold text-gray-400 ">Process</a>
							</li>
							<li className="flex">
								<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 font-bold text-gray-400">Resources</a>
							</li>
							<li className="flex">
								<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 font-bold text-gray-400 ">Pricing</a>
							</li>
						</ul>
					</div>
					<div className="items-center flex-shrink-0 hidden lg:flex">
						<button className=" manu-button px-5 py-2 rounded-3xl mr-5">Login</button>
						<button className=" manu-button px-5 py-2  rounded-3xl">Sign up</button>
					</div>
				
					<div className="dropdown dropdown-bottom dropdown-end lg:hidden">
						<label tabIndex={0} className="m-1"><button className="p-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button></label>
						<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
							<li><a>Process</a></li>
							<li><a>Resources</a></li>
							<li><a>Pricing</a></li>
							<button className="manu-button  py-3 rounded-3xl mb-5">Login</button>
						    <button className="manu-button py-3  rounded-3xl">Sign up</button>
						</ul>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;