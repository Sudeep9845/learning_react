import { useState } from "react";

const App = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	const decrement = () => {
		if (counter > 0) {
			setCounter((prevCounter) => prevCounter - 1);
		}
	};
	return (
		<>
			<h1>Counter App</h1>
			<p>This is a simple counter application.</p>
			<br />
			<h2>{counter}</h2>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<br />
		</>
	);
};

export default App;
