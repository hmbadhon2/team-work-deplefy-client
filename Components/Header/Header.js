import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
	const { user, logOut } = useContext(AuthContext)
	const [isOpen, setIsOpen] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null;
	const currentTheme = theme === "system" ? systemTheme : theme;

	const manuItem = <>
		<li className="">
			<a rel="noopener noreferrer" href="/Home" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-info">Home</a>
		</li>

		<li className="">
			<a rel="noopener noreferrer" href="/Sites" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-info">Sites</a>
		</li>

		<li className="">
			<a rel="noopener noreferrer" href="/Contact" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-info">Contact</a>
		</li>


		{/* <li className="">
			<a rel="noopener noreferrer" href="#" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-info">Pricing</a>
		</li> */}

		<li className="">
			<a rel="noopener noreferrer" href="/Teams" className="manu-item flex items-center px-4 -mb-1 font-bold text-gray-500 dark:hover:text-info">Team settings</a>
		</li>
	</>

	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(() => { })
	}


	const renderThemeChanger = () => {
	

		if (currentTheme === "dark") {
			return (
				<div onClick={() => setTheme('light')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-info">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
				</svg></div>

			)
		}
		else {
			return (
				<div onClick={() => setTheme('dark')}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-800">
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
							theme === "dark" ? <img src="https://i.ibb.co/wWbLTRv/Untitled-design-2021-07-06-T142744-045-1-removebg-preview.png" /> : <img src="https://i.ibb.co/hRPJLC7/1-removebg-preview.png" />
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
						<div className="mr-4">
							{renderThemeChanger()}
						</div>
						{
							user?.uid ? <div> {
								currentTheme === "dark" ? <button onClick={handleLogOut} className="btn btn-outline btn-info px-5 py-2 rounded-3xl mr-5">Log Out</button> : <button onClick={handleLogOut} className=" manu-button px-5 py-2 rounded-3xl mr-5">Log Out</button>
							}
							</div>


								:
								<>

									<div>
										{
											theme === "dark" ? <Link href='/login'><button className="btn btn-outline btn-info px-5 py-2 rounded-3xl mr-5">Login</button></Link> : <Link href='/login'><button className=" manu-button px-5 py-2 rounded-3xl mr-5">Login</button></Link>
										}
									</div>
									<div>
										{
											theme === "dark" ? <Link href='/signup'><button className=" btn btn-outline btn-info px-5 py-2  rounded-3xl">Sign up</button></Link> : <Link href='/signup'><button className=" manu-button px-5 py-2  rounded-3xl">Sign up</button></Link>
										}
									</div>


								</>
						}

					</div>

				</div>
				<div className="dropdown dropdown-bottom dropdown-end flex  md:hidden">
					<div className="mr-3">
						{renderThemeChanger()}
					</div>
					<div>

						{isOpen ?
							<label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className="m-1"><button className="text-pink-800 dark:text-info font-bold">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button></label>
							:
							<label onClick={() => setIsOpen(!isOpen)} tabIndex={0} className="m-1"><button className="text-pink-800 dark:text-info font-bold">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
								</svg>

							</button></label>

						}
					</div>
					{
						isOpen && (
							<ul onClick={() => setIsOpen(!isOpen)} tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 dark:bg-black rounded-box w-52">
								{manuItem}
								{
									user?.uid ? <div>
										{
											theme==="dark"? <button onClick={handleLogOut} className="btn btn-outline btn-info px-8 py-2 rounded-3xl mb-5">Log Out</button> : <button onClick={handleLogOut} className="manu-button px-8 py-2 rounded-3xl mb-5">Log Out</button>
										}
									</div>
									
										:
										<>
										  <div>
											{
												theme==="dark"? <Link href='/login'><button className="btn btn-outline btn-info px-8 py-2 rounded-3xl mb-5">Login</button></Link> : <Link href='/login'><button className="manu-button px-8 py-2 rounded-3xl mb-5">Login</button></Link>
											}
										  </div>
										  <div>
											{
												theme==="dark"? <Link href='/signup'><button className="btn btn-outline btn-info px-8 py-2  rounded-3xl">Sign up</button></Link> : <Link href='/signup'><button className="manu-button px-8 py-2  rounded-3xl">Sign up</button></Link>
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