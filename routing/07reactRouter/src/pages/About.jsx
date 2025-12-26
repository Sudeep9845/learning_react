import React from "react";

const About = () => {
	return (
		<div className="py-16">
			<div className="container m-auto px-6 text-gray-300 md:px-12 xl:px-6">
				<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
					<div className="md:5/12 lg:w-5/12">
						<img
							src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
							alt="image"
							className="rounded-lg shadow-lg"
						/>
					</div>
					<div className="md:7/12 lg:w-6/12">
						<h2 className="text-2xl text-teal-400 font-bold md:text-4xl">
							Passionate about React Development
						</h2>
						<p className="mt-6 text-gray-300">
							We are a team of dedicated developers building the future of the
							web. Our mission is to create seamless, high-performance
							applications using the latest technologies.
						</p>
						<p className="mt-4 text-gray-300">
							With a focus on user experience and clean code, we strive to
							deliver excellence in every project.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
