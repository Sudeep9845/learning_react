import React from "react";
import Card from "./components/Card";

const App = () => {
	const users = [
		{
			username: "John Doe",
			age: 30,
			occupation: "Software Engineer",
			location: "New York",
		},
		{
			username: "Jane Smith",
			age: 25,
			occupation: "Designer",
			location: "Los Angeles",
		},
	];
	return (
		<div className="bg-zinc-800 w-full h-screen flex justify-center items-center">
			{users.map((user, index) => {
				return (
					<Card
						key={index}
						username={user.username}
						age={user.age}
						occupation={user.occupation}
						location={user.location}
					/>
				);
			})}
		</div>
	);
};

export default App;
