import React from "react";

const Card = ({ username, age, occupation, location }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
			<div className="font-bold text-xl mb-2 text-gray-800">{username}</div>
			<div className="text-gray-700 text-base">
				<p>
					<span className="font-bold">Age:</span> {age}
				</p>
				<p>
					<span className="font-bold">Occupation:</span> {occupation}
				</p>
				<p>
					<span className="font-bold">Location:</span> {location}
				</p>
			</div>
		</div>
	);
};

export default Card;
