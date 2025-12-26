import React from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
	const data = useLoaderData();
	if (!data)
		return (
			<div className="text-center text-white mt-10 text-2xl">Loading...</div>
		);

	return (
		<div className="flex flex-col items-center justify-center grow p-8 w-full">
			<div className="bg-zinc-800 p-8 rounded-xl shadow-2xl text-center border border-zinc-700 max-w-md w-full transform hover:scale-105 transition duration-300">
				<img
					src={data.avatar_url}
					alt="GitHub Avatar"
					className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-500 shadow-lg"
				/>
				<h2 className="text-3xl font-bold text-white mb-2">{data.name}</h2>
				<p className="text-teal-400 mb-4">@{data.login}</p>
				<p className="text-gray-400 mb-6 text-sm">{data.bio}</p>

				<div className="flex justify-around w-full mb-8 bg-zinc-900/50 p-4 rounded-lg">
					<div className="flex flex-col items-center">
						<span className="text-xl font-bold text-white">
							{data.followers}
						</span>
						<span className="text-xs text-gray-500 uppercase tracking-wider">
							Followers
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-xl font-bold text-white">
							{data.following}
						</span>
						<span className="text-xs text-gray-500 uppercase tracking-wider">
							Following
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-xl font-bold text-white">
							{data.public_repos}
						</span>
						<span className="text-xs text-gray-500 uppercase tracking-wider">
							Repos
						</span>
					</div>
				</div>

				<a
					href={data.html_url}
					target="_blank"
					rel="noreferrer"
					className="inline-block w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 shadow-md"
				>
					View GitHub Profile
				</a>
			</div>
		</div>
	);
};

export default Github;
