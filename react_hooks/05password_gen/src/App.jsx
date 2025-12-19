import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
	// State hooks to manage the password string and configuration settings
	const [password, setPassword] = useState("");
	const [passwordLength, setPasswordLength] = useState(8);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSymbols, setIncludeSymbols] = useState(false);

	// useRef hook to hold a reference to the input element for selection purposes
	const passwordRef = useRef(null);

	// useCallback hook to memoize the password generation logic
	// This prevents the function from being recreated on every render unless dependencies change
	const generatePassword = useCallback(() => {
		let pass = "";
		let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (includeNumbers) characters += "0123456789";
		if (includeSymbols) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

		for (let i = 0; i < passwordLength; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			pass += characters[randomIndex];
		}
		setPassword(pass);
	}, [passwordLength, includeNumbers, includeSymbols]);

	// Function to copy the password to the clipboard and visually select the text
	const copyPassword = () => {
		window.navigator.clipboard.writeText(password);
		passwordRef.current?.select();
	};

	// useEffect hook to automatically generate a new password when dependencies change
	useEffect(() => {
		generatePassword();
	}, [passwordLength, includeNumbers, includeSymbols, generatePassword]);
	return (
		<div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-zinc-800">
			<h1 className="text-3xl font-bold text-white">Password Generator</h1>
			<div className=" w-1/4 h-fit p-4 flex gap-3">
				<input
					type="text"
					name=""
					value={password}
					placeholder="Password"
					className="input input-md input-accent"
					readOnly
					ref={passwordRef}
				/>
				<button
					className="btn-accent bg-accent rounded-md px-2 text-center cursor-pointer active:scale-95"
					onClick={copyPassword}
				>
					📝
				</button>
			</div>
			<div className="w-1/4 h-fit p-4 flex flex-col gap-3">
				<label htmlFor="passwordLength">Length: {passwordLength}</label>
				<input
					name="passwordLength"
					type="range"
					min={8}
					max="30"
					value={passwordLength}
					onChange={(e) => setPasswordLength(e.target.value)}
					className="range range-xs range-accent"
				/>
			</div>
			<div className="w-1/4 h-fit p-4 flex gap-8">
				<div className="flex gap-2">
					<input
						type="checkbox"
						checked={includeNumbers}
						className="checkbox checkbox-accent"
						onChange={() => setIncludeNumbers((prev) => !prev)}
					/>
					<label htmlFor="">Numbers</label>
				</div>
				<div className="flex gap-2">
					<input
						type="checkbox"
						checked={includeSymbols}
						className="checkbox checkbox-accent"
						onChange={() => setIncludeSymbols((prev) => !prev)}
					/>
					<label htmlFor="">Symbols</label>
				</div>
			</div>
		</div>
	);
};

export default App;
