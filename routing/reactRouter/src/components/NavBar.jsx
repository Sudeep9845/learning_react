import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
	return (
		<div className="w-full h-fit flex justify-center items-center p-4 sticky top-0 z-50">
			<div className="w-fit h-fit px-8 py-3 rounded-full bg-zinc-800/90 border border-zinc-700 shadow-xl backdrop-blur-sm flex justify-center items-center gap-8 text-lg font-medium">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`${
							isActive ? "text-teal-400" : "text-zinc-400 hover:text-zinc-100"
						} transition-colors duration-300`
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						`${
							isActive ? "text-teal-400" : "text-zinc-400 hover:text-zinc-100"
						} transition-colors duration-300`
					}
				>
					About
				</NavLink>
				<NavLink
					to="/github"
					className={({ isActive }) =>
						`${
							isActive ? "text-teal-400" : "text-zinc-400 hover:text-zinc-100"
						} transition-colors duration-300`
					}
				>
					Github
				</NavLink>
				<NavLink
					to="/user"
					className={({ isActive }) =>
						`${
							isActive ? "text-teal-400" : "text-zinc-400 hover:text-zinc-100"
						} transition-colors duration-300`
					}
				>
					User
				</NavLink>
			</div>
		</div>
	);
};

export default NavBar;
