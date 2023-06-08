import { useTheme } from "next-themes";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { async } from "@firebase/util";
import { ShareContext } from "../../ShareProvider/ShareProvider";


const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const { profileImage, isFetching } = useContext(ShareContext);
	const [isOpen, setIsOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [data, setData] = useState()
	const [dropDown, setDropDown] = useState(false);
	const [navbar, setNavbar] = useState(true);

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(() => { })
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null;

	// if (isFetching) {
	// 	return <div>
	// 		<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
	// 	</div>
	// }

	const renderThemeChanger = () => {


		if (theme === "dark") {
			return (
				<div onClick={() => setTheme('light')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lime-700">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
				</svg></div>

			)
		}
		else {
			return (
				<div onClick={() => setTheme('dark')}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 teamNameColor">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
					</svg>

				</div>
			)
		}
	}

	const dropDownItems = (
		<>
			<li>
				<Link href="/Profile" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-700 dark:text-gray-500 dark:hover:text-lime-700">View Profile</Link>
			</li>
			<li>
				<Link href='/Teams' passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-700 dark:text-gray-500 dark:hover:text-lime-700">Team Settings</Link>
			</li>
			<li>
			<Link rel="noopener noreferrer" href="/Domain" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-700 dark:text-gray-500 dark:hover:text-lime-700">Domain</Link>
		    </li>

			<li>
				<Link onClick={handleLogOut} href="#" passHref className="manu-item flex items-center -mb-1 font-bold text-gray-700 dark:text-gray-500 dark:hover:text-lime-700">Log Out</Link>
			</li>
		</>
	);



	const manuItem = <>
		<li onClick={() => setNavbar(!navbar)} className="">
			<Link rel="noopener noreferrer" href="/" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-700">Home</Link>
		</li>

		<li onClick={() => setNavbar(!navbar)} className="">
			<Link rel="noopener noreferrer" href="/Sites" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-700">Sites</Link>
		</li>
		<li onClick={() => setNavbar(!navbar)} className="">
			<Link rel="noopener noreferrer" href="/Contact" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-700">Contact</Link>
		</li>
		<li onClick={() => setNavbar(!navbar)} className="">
			<Link rel="noopener noreferrer" href="/Builds" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-700">Builds</Link>
		</li>
		<li onClick={() => setNavbar(!navbar)} className="">
			<Link rel="noopener noreferrer" href="/DashboardLayout" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-700">Dashboard</Link>
		</li>

		<li onClick={() => setNavbar(!navbar)} className="">
			<Link rel="noopener noreferrer" href="/Faq" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-700">FAQ</Link>
		</li>

		<li>
			<div>
				{
					user?.uid ?
						<>
							<div className=" relative ml-4 lg:ml-[500px]">

								{
									profileImage[0]?.image ?
										<>
											<div className="flex items-center">
												<div className="mr-3 hidden lg:flex">
													{renderThemeChanger()}
												</div>
												<img onClick={() => setDropDown(!dropDown)} alt="" className="w-12 h-12 border-2 border-white rounded-full" src={profileImage[0]?.image} />
											</div>
										</>

										:
										<>
											{
												user?.photoURL ? <div className="flex items-center">
													<div className="mr-3 hidden lg:flex">
														{renderThemeChanger()}
													</div>
													<img onClick={() => setDropDown(!dropDown)} alt="" className="w-12 h-12 border-2 border-white rounded-full" src={user?.photoURL} />
												</div>
													:
													<>
														<div className="flex items-center">
															<div className="mr-3 hidden lg:flex">
																{renderThemeChanger()}
															</div>
															<img onClick={() => setDropDown(!dropDown)} alt="" className="w-12 h-12 border-2 border-white rounded-full" src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg' />
														</div>

													</>

											}

										</>

								}
								{dropDown && (
									<ul
										className="lg:absolute w-44  lg:top-14  lg:right-0 menu ul bg-indigo-100  dark:bg-black shadow  lg:bg-opacity-30 lg:backdrop-filter lg:backdrop-blur-2xl lg:shadow-md lg:z-50 lg:p-2 "
										onClick={() => {
											setDropDown(!dropDown);
											setNavbar(!navbar);
										}}>
										{dropDownItems}
									</ul>
								)}
							</div>
						</>
						:
						<>
							<div className="lg:flex lg:ml-[345px]">

								<div className="flex md:items-center">
									<div className="mr-3 hidden lg:flex">
										{renderThemeChanger()}
									</div>
								</div>

								<div className="md:flex mr-[350px] md:mr-0">
									<div>
										{
											theme === "dark" ? <Link href='/login' passHref><button onClick={() => setNavbar(!navbar)} className="manu-buttonDark px-5 py-2 rounded-3xl md:mr-5">Login</button></Link> : <Link href='/login' passHref><button className=" manu-button px-5 py-2 rounded-3xl mr-5">Login</button></Link>
										}
									</div>
									<br></br>
									<div>
										{
											theme === "dark" ? <Link href='/signup' passHref><button onClick={() => setNavbar(!navbar)} className="manu-buttonDark px-5 py-2  rounded-3xl">Sign up</button></Link> : <Link href='/signup' passHref><button className=" manu-button px-5 py-2  rounded-3xl">Sign up</button></Link>
										}
									</div>
								</div>


							</div>

						</>

				}
			</div>
		</li>


	</>









	return (
		<div className="pt-24">
			<nav className="fixed  bg-indigo-100 dark:bg-black dark:border-b-2 dark:border-slate-900 shadow-md  z-50 w-full md:px-5 py-1  right-0 top-0 left-0">
				<div className="px-4 md:px-2 lg:px-20 mx-auto lg:items-center lg:flex">
					<div>
						<div className="flex items-center justify-between  lg:block">
							<Link href='/' passHref>
								<div className="w-14 rounded">
									{
										theme === "dark" ? <img src="https://i.ibb.co/D7cSDrm/Perfect-unique-attractive-stylish-geometric-tech-PD-DP-P-D-initial-based-letter-icon-logo-removebg-p.png" /> : <img src="https://i.ibb.co/QXx4dzT/Perfect-unique-attractive-stylish-geometric-tech-PD-DP-P-D-initial-based-letter-icon-logo-removebg-p.png" />
									}
								</div>
							</Link>
							<div className="lg:hidden flex items-center gap-1 justify-center">
								<div className="cursor-default">{renderThemeChanger()}</div>
								<button
									className="p-2 text-gray-700 rounded-md outline-none "
									onClick={() => setNavbar(!navbar)}>
									{navbar ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-blue-900 dark:text-lime-700 font-bold"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-blue-900 dark:text-lime-700 font-bold"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									)}
								</button>

							</div>
						</div>
					</div>
					<div className="flex  dark:text-white gap-4">
						<div

							className={`text-center flex-1 justify-self-center items-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 cursor-pointer ${navbar ? "hidden" : "block"
								}`}>
							<ul className="items-center my-6 lg:my-0 justify-center font-semibold ul  space-y-5 lg:flex  lg:space-y-0  dark:text-white">
								{manuItem}
							</ul>
						</div>

					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;


