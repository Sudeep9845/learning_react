import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { About, Home, Github,User } from "./pages";
import { getGithubUserData } from "./data/getGithubUserData";


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route
				path="github"
				loader={getGithubUserData}
				element={<Github />}
				hydrateFallbackElement={<div>Loading GitHub profile...</div>}
			/>
			<Route path="user/" element={<User />}>
				<Route path=":userId" element={<User />} />
			</Route>
			<Route path="*" element={<div>404</div>} />
		</Route>
	)
);
const App = () => {
	return (
		<RouterProvider
			router={router}
			fallbackElement={<div>Loading application...</div>}
		/>
	);
};

export default App;
