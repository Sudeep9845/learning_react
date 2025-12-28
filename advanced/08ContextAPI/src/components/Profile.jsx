import React from "react";
import useUser from "../data/User";

const Profile = () => {
	const { user } = useUser();
	return (
		<div className="p-4 text-center text-white bg-gray-800 rounded shadow-md">
			<h1 className="text-2xl font-bold">
				{!user?.username ? "Guest" : `Welcome ${user.username}`}
			</h1>
			<p className="mt-2">
				{user?.password ? `Password: ${user.password}` : "No password set."}
			</p>
		</div>
	);
};

export default Profile;
