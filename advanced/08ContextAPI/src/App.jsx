import React, { useState } from "react";
import Login from "./components/Login";
import { UserContextProvider } from "./data/User";
import Profile from "./components/Profile";

const App = () => {
	const [user, setUser] = useState({ username: "", password: "" });
	return (
		<UserContextProvider value={{ user, setUser }}>
			<div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-900 ">
				<Login />
				<Profile />
			</div>
		</UserContextProvider>
	);
};

export default App;
