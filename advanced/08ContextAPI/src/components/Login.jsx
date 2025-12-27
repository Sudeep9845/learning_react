import React from "react";

const Login = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900">
			<div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded shadow-md">
				<h2 className="text-2xl font-bold text-center text-white">Login</h2>
				<form className="space-y-4">
					<div>
						<label className="block text-sm font-medium text-gray-300">
							Username
						</label>
						<input
							type="text"
							className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
							placeholder="Enter username"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-300">
							Password
						</label>
						<input
							type="password"
							className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
							placeholder="Enter password"
						/>
					</div>
					<button
						type="submit"
						className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Sign In
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
