import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const threshold = window.innerHeight * 0.35;
			let currentActive = "";

			for (let i = navLinks.length - 1; i >= 0; i--) {
				const section = document.getElementById(navLinks[i].id);
				if (section) {
					const rect = section.getBoundingClientRect();
					if (rect.top <= threshold) {
						currentActive = navLinks[i].title;
						break;
					}
				}
			}

			setActive(currentActive);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`${styles.paddingX} w-full flex py-4 items-center fixed top-0 z-20 transition-all duration-300 ${
				scrolled
					? "bg-primary/80 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/[0.04]"
					: "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-9 h-9 object-contain" />
					<p className="text-white text-[14px] sm:text-[15.5px] font-bold cursor-pointer flex items-center">
						Faisal Abbas
						<span className="sm:block hidden ml-1.5 text-[13px] font-medium text-secondary">
							| Software That Scales
						</span>
					</p>
				</Link>
				<div className="list-none hidden sm:flex flex-row items-center gap-4 md:gap-6 lg:gap-8">
					{navLinks.map((link) => (
						<a
							key={link.id}
							href={`#${link.id}`}
							className={`${
								active === link.title ? "text-white" : "text-secondary"
							} hover:text-white cursor-pointer text-[13px] md:text-[14px] lg:text-[15px] font-medium transition-colors duration-200 relative`}
							onClick={() => setActive(link.title)}
						>
							{link.title}
							{active === link.title && (
								<span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#915eff] rounded-full" />
							)}
						</a>
					))}
					<a
						href="#contact"
						onClick={() => setActive("Contact")}
						className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-1.5 px-4 lg:px-5 rounded-lg text-[12px] lg:text-[13px] font-semibold hover:opacity-90 transition-opacity shadow-sm shadow-purple-500/20"
					>
						Hire Me
					</a>
				</div>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 bg-[#0d0a1a]/95 backdrop-blur-xl absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-[30] rounded-xl border border-white/[0.06] shadow-2xl`}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-3 w-full">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? "text-white bg-purple-500/10 border-l-2 border-[#915eff]"
											: "text-secondary border-l-2 border-transparent"
									} hover:text-white cursor-pointer text-[15px] font-medium transition-all duration-200 w-full pl-3 py-1`}
									onClick={() => {
										setToggle(false);
										setActive(link.title);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
							<li className="w-full pt-2 border-t border-white/[0.06]">
								<a
									href="#contact"
									onClick={() => { setToggle(false); setActive("Contact"); }}
									className="block text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 rounded-lg text-[14px] font-semibold"
								>
									Hire Me
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
