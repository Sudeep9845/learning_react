import React, { useState } from "react";

const App = () => {
	// useState is a React Hook that lets you add state to your functional components.
	// It returns a stateful value and a function to update it.
	// Here, 'bgColor' is the current state value, initialized to "bg-zinc-800".
	// 'setBgColor' is the function used to update 'bgColor'.
	const [bgColor, setBgColor] = useState("bg-zinc-800");

	return (
		// The main container div. Its background color is dynamically set by the 'bgColor' state.
		<div className={`w-full h-screen relative ${bgColor} duration-200 transition-all ease-in-out`}>
			{/* This div acts as a color palette, positioned at the bottom center of the screen. */}
			<div className="w-fit h-fit flex gap-2 items-center p-2 border border-white/60 rounded-full bg-white/20 backdrop-blur-md absolute bottom-0 left-1/2 -translate-x-1/2 mb-8">
				{/* Color option 1: Red */}
				<div
					className="w-8 h-8 rounded-full border-2 border-white/60 bg-red-400 cursor-pointer active:scale-95"
					// When clicked, this div updates the 'bgColor' state to "bg-red-400".
					onClick={() => setBgColor("bg-red-400")}
				></div>
				{/* Color option 2: Emerald */}
				<div
					className="w-8 h-8 rounded-full border-2 border-white/60 bg-emerald-400 cursor-pointer active:scale-95"
					// When clicked, this div updates the 'bgColor' state to "bg-emerald-400".
					onClick={() => setBgColor("bg-emerald-400")}
				></div>
				{/* Color option 3: Blue */}
				<div
					className="w-8 h-8 rounded-full border-2 border-white/60 bg-blue-400 cursor-pointer active:scale-95"
					// When clicked, this div updates the 'bgColor' state to "bg-blue-400".
					onClick={() => setBgColor("bg-blue-400")}
				></div>
			</div>
		</div>
	);
};
export default App;
