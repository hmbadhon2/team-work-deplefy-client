import { useTheme } from "next-themes";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaUser } from 'react-icons/fa';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { async } from "@firebase/util";


const Header = () => {
	const { user, logOut, profileImage, isFetching } = useContext(AuthContext)
	const [isOpen, setIsOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [data, setData] = useState()



	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null;

	if (isFetching) {
		return <div>
			<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
		</div>
	}

	const manuItem = <>
		<li className="">
			<Link rel="noopener noreferrer" href="/Home" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-600">Home</Link>
		</li>

		<li className="">
			<Link rel="noopener noreferrer" href="/Sites" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-600">Sites</Link>
		</li>

		<li className="">
			<Link rel="noopener noreferrer" href="/Contact" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-600">Contact</Link>
		</li>
		{/* <li className="">
			<a rel="noopener noreferrer" href="/Teams" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-info">Team settings</a>
		</li> */}
		<li className="">
			<Link rel="noopener noreferrer" href="/Builds" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-600">Builds</Link>
		</li>
		<li className="">
			<Link rel="noopener noreferrer" href="/dashboard" passHref className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-lime-600">Dashboard</Link>
		</li>
	</>

	// ......................................................

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(() => { })
	}
	// ................Image Manu...........................






	// console.log(profileImage)

	const imageManu = <>
		<Menu
			animate={{
				mount: { y: 0 },
				unmount: { y: 25 },
			}}
		>
			<MenuHandler>
				{
					profileImage[0]?.image ? <Button variant="gradient"><img className='w-12 h-12 rounded-full' src={profileImage[0]?.image} alt="" /></Button> :
						<div>
							{
								user?.photoURL ? <Button variant="gradient"><img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" /></Button> : <Button variant="gradient"><img className='w-12 h-12 rounded-full' src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg' alt="" /></Button>
							}

						</div>

				}


			</MenuHandler>
			<MenuList className="dark:bg-black font-bold">
				<div className="h-full p-3 space-y-2 w-60 dark:text-white">
					<div className="flex items-center p-2 space-x-4">
						<div className="avatar">
							<div className="w-12 h-12 rounded-full">

								{
									profileImage[0]?.image ? <img src={profileImage[0]?.image} />
										:
										<div>
											{user?.photoURL ? <img src={user?.photoURL} /> : <img src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg' />}
										</div>
								}
							</div>
						</div>
						{/* <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" /> */}
						<div>
							{
								profileImage[0]?.name ? <h2 className="text-lg font-semibold">{profileImage[0]?.name}</h2> : <h2 className="text-lg font-semibold">{user?.displayName}</h2>
							}
							<span className="flex items-center space-x-1">
								<a rel="noopener noreferrer" href="/Profile" className="text-xs hover:underline dark:text-gray-400">View profile</a>
							</span>
						</div>
					</div>
					<div className="divide-y divide-gray-700">
						<ul className="pt-2 pb-4 space-y-1 text-sm">
							<Link href='/Teams'>
								<li className="icon">
									<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-black dark:text-white">
											<path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
										</svg>
										<span>Team settings</span>

									</a>
								</li>
							</Link>

							<Link href='/Analysis'>
								<li><a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-black dark:text-white">
										<path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
										<path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
										<path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
									</svg>
									<span>Analysis</span>
								</a>
								</li>
							</Link>


						</ul>
						<ul className="pt-4 pb-2 space-y-1 text-sm">
							<li>
								<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-black dark:text-white">
										<path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
										<path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
									</svg>
									<span>Settings</span>
								</a>
							</li>
							<li onClick={handleLogOut}><a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-black dark:text-white">
									<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
									<rect width="32" height="64" x="256" y="232"></rect>
								</svg>
								<span>Logout</span>

							</a>
							</li>
						</ul>
					</div>
				</div>

			</MenuList>
		</Menu>
	</>


	// .......................Dark Mode...............................

	const renderThemeChanger = () => {


		if (theme === "dark") {
			return (
				<div onClick={() => setTheme('light')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lime-600">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
				</svg></div>

			)
		}
		else {
			return (
				<div onClick={() => setTheme('dark')}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-900">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
					</svg>

				</div>
			)
		}
	}


	return (
		<div className="pt-24">
			<div className="navbar bg-blue-50 dark:bg-black dark:text-white dark:border-b-2 dark:border-slate-900 lg:px-28 shadow">
				<div className="navbar-start">
					<div className="w-14 rounded">
						{
							theme === "dark" ? <img src="https://i.ibb.co/cky6b16/Perfect-unique-attractive-stylish-geometric-tech-PD-DP-P-D-initial-based-letter-icon-logo-removebg-p.png" /> : <img src="https://i.ibb.co/QXx4dzT/Perfect-unique-attractive-stylish-geometric-tech-PD-DP-P-D-initial-based-letter-icon-logo-removebg-p.png" />
						}
					</div>

					<div className="ml-4">
						<ul className="hidden md:flex">
							{manuItem}

						</ul>
					</div>
				</div>

				<div className="navbar-end">

					<div className="items-center flex-shrink-0 hidden md:flex">
						<div className="mr-3">
							{renderThemeChanger()}
						</div>

						<div>
							{
								user?.uid ? <div className="hidden md:flex">
									{imageManu}
								</div>
									:
									<>
										<div className="flex">

											<div>
												{
													theme === "dark" ? <Link href='/login'><button className="manu-buttonDark px-5 py-2 rounded-3xl mr-5">Login</button></Link> : <Link href='/login'><button className=" manu-button px-5 py-2 rounded-3xl mr-5">Login</button></Link>
												}
											</div>
											<div>
												{
													theme === "dark" ? <Link href='/signup'><button className="manu-buttonDark px-5 py-2  rounded-3xl">Sign up</button></Link> : <Link href='/signup'><button className=" manu-button px-5 py-2  rounded-3xl">Sign up</button></Link>
												}
											</div>


										</div>
									</>
							}
						</div>

					</div>

				</div>

				<div className="dropdown dropdown-bottom dropdown-end flex md:hidden">
					<div>
						{
							user?.uid ? <div className="w-24">
								{imageManu}
							</div>
								:
								null

						}
					</div>
					<div className="mr-3">
						{renderThemeChanger()}
					</div>



					<div>

						{isOpen ?
							<label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className="m-1"><button className="text-blue-900 dark:text-lime-600 font-bold">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button></label>
							:
							<label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className="m-1"><button className="text-blue-900 dark:text-lime-600 font-bold">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>

							</button></label>

						}
					</div>

					{
						isOpen && (
							<ul onClick={() => setIsOpen(!isOpen)} tabIndex={1} className="dropdown-content flex menu p-2 shadow bg-white dark:bg-black rounded-box w-52">



								{manuItem}
								{
									user?.uid ? <div>
										{
											theme === "dark" ? <button onClick={handleLogOut} className="btn btn-outline btn-info px-8 py-2 rounded-3xl mb-5">Log Out</button> : <button onClick={handleLogOut} className="manu-button px-8 py-2 rounded-3xl mb-5">Log Out</button>
										}
									</div>

										:
										<>
											<div>
												{
													theme === "dark" ? <Link href='/login'><button className="btn btn-outline btn-info px-8 py-2 rounded-3xl mb-5">Login</button></Link> : <Link href='/login'><button className="manu-button px-8 py-2 rounded-3xl mb-5">Login</button></Link>
												}
											</div>
											<div>
												{
													theme === "dark" ? <Link href='/signup'><button className="btn btn-outline btn-info px-8 py-2  rounded-3xl">Sign up</button></Link> : <Link href='/signup'><button className="manu-button px-8 py-2  rounded-3xl">Sign up</button></Link>
												}
											</div>

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


