import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
	const { user, logOut } = useContext(AuthContext)
	const [isOpen, setIsOpen] = useState(false);
	const manuItem = <>
		<li className="">
			<a rel="noopener noreferrer" href="/Home" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-400 ">Home</a>
		</li>

		<li className="">
			<a rel="noopener noreferrer" href="/Deploys" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-400 ">Deploy</a>
		</li>

		<li className="">
			<a rel="noopener noreferrer" href="/Contact" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-400">Contact</a>
		</li>


		<li className="">
			<a rel="noopener noreferrer" href="#" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-400 ">Pricing</a>
		</li>
	</>

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(() => { })
	}

	return (
		<div className="pt-24">
			<div className="navbar bg-blue-50 lg:px-28 shadow">
				<div className="navbar-start">
					<div className="w-14 rounded">
						<img src="https://i.ibb.co/5GgkG1j/removebg-preview.png" />
					</div>

					<div className="ml-4">
						<ul className="hidden md:flex">
							{manuItem}
						</ul>
					</div>
				</div>

				<div className="navbar-end">
					<div className="items-center flex-shrink-0 hidden md:flex">
						{
							user?.uid ? <button onClick={handleLogOut} className=" manu-button px-5 py-2 rounded-3xl mr-5">Log Out</button>
								:
								<>
									<Link href='/login'><button className=" manu-button px-5 py-2 rounded-3xl mr-5">Login</button></Link>
									<Link href='/signup'><button className=" manu-button px-5 py-2  rounded-3xl">Sign up</button></Link>
								</>
						}

					</div>
				</div>
				<div className="dropdown dropdown-bottom dropdown-end md:hidden">

				   <div>
					{isOpen ?
						<label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className="m-1"><button className="">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button></label>
					:
					<label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className="m-1"><button className="">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button></label>

					}
				   </div>
					{
						isOpen && (
							<ul onClick={() => setIsOpen(!isOpen)} tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
								{manuItem}
								{
									user?.uid ? <button onClick={handleLogOut} className="manu-button px-8 py-2 rounded-3xl mb-5">Log Out</button>
										:
										<>
											<Link href='/login'><button className="manu-button px-8 py-2 rounded-3xl mb-5">Login</button></Link>
											<Link href='/signup'><button className="manu-button px-8 py-2  rounded-3xl">Sign up</button></Link>
										</>
								}

							</ul>
						)
					}

				</div>
			</div>
		</div>
	);
};

export default Header;