import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./data/Theme";

const App = () => {
	const [themeMode, setThemeMode] = useState("light");

	const darkTheme = () => {
		setThemeMode("dark");
	};
	const lightTheme = () => {
		setThemeMode("light");
	};

	useEffect(() => {
		document.querySelector("html").classList.remove("dark", "light");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
			<div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
				<div className="mb-4">
					<ThemeBtn />
				</div>
				<Card />
			</div>
		</ThemeProvider>
	);
};

export default App;
