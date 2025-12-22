import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
	const { userId } = useParams();
	return (
		<div className="flex flex-col items-center justify-center grow p-8">
			<div className="bg-zinc-800 p-8 rounded-xl shadow-2xl text-center border border-zinc-700 max-w-md w-full transform hover:scale-105 transition duration-300">
				<h1 className="text-5xl font-bold text-teal-400 mb-6">User Profile</h1>
				<p className="text-xl text-gray-300 mb-8">
					Welcome, user with ID:{" "}
					<span className="font-semibold text-white">{userId}</span>
				</p>
				<p className="text-gray-400 text-sm">
					This is a dynamic user page demonstrating how to use URL parameters in
					React Router.
				</p>
			</div>
		</div>
	);
};

export default User;
