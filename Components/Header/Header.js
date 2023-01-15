import Image from "next/image";
import { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<div className="navbar">
				<div className="navbar-start">
					<div className="w-14 rounded">
						<img src="https://i.ibb.co/5GgkG1j/removebg-preview.png" />
					</div>

					<div className="ml-4">
						<ul className="hidden md:flex">
							<li className="flex">
								<a rel="noopener noreferrer" href="#" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-400 ">Process</a>
							</li>
							<li className="flex">
								<a rel="noopener noreferrer" href="#" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-400">Resources</a>
							</li>
							<li className="flex">
								<a rel="noopener noreferrer" href="#" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-400 ">Pricing</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="navbar-end">
					<div className="items-center flex-shrink-0 hidden lg:flex">
						<button className=" manu-button px-5 py-2 rounded-3xl mr-5">Login</button>
						<button className=" manu-button px-5 py-2  rounded-3xl">Sign up</button>
					</div>
				</div>
				<div className="dropdown dropdown-bottom dropdown-end lg:hidden">
					<label tabIndex={0} className="m-1"><button className="p-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button></label>
					<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a className="manu-item">Process</a></li>
						<li><a className="manu-item">Resources</a></li>
						<li><a className="manu-item">Pricing</a></li>
						<button className="manu-button  py-3 rounded-3xl mb-5">Login</button>
						<button className="manu-button py-3  rounded-3xl">Sign up</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;