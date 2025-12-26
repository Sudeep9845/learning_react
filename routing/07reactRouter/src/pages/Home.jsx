import React from "react";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center grow p-8">
			<h1 className="text-5xl font-bold text-teal-400 mb-6 animate-pulse">
				Welcome to React Router Demo!
			</h1>
			<p className="text-xl text-gray-300 text-center max-w-2xl mb-8">
				Explore the power of React Router for seamless navigation in your
				single-page applications. This demo showcases basic routing, nested
				routes, and active link styling.
			</p>
			<div className="flex space-x-4">
				<a
					href="/about"
					className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
				>
					Learn More
				</a>
				<a
					href="/github"
					className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
				>
					View on GitHub
				</a>
			</div>
		</div>
	);
};

export default Home;
