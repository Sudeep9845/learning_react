import React, { useState } from "react";
import InputCard from "./components/InputCard";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(from);
	const options = Object.keys(currencyInfo);

	const swap = () => {
		setFrom(to);
		setTo(from);
		setAmount(convertedAmount);
		setConvertedAmount(amount);
	};
	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};

	return (
		<div className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-zinc-900 text-white font-mono">
			<form
				className="relative w-1/2 h-fit p-4 flex flex-col gap-4 bg-white/60 rounded-md"
				onSubmit={(e) => {
					e.preventDefault();
					convert();
				}}
			>
				<InputCard
					label="From"
					amount={amount}
					onAmountChange={(amount) => setAmount(amount)}
					onCurrencyChange={(currency) => setFrom(currency)}
					currencyOptions={options}
					selectedCurrency={from}
				/>
				<InputCard
					label="To"
					amount={convertedAmount}
					onCurrencyChange={(currency) => setTo(currency)}
					currencyOptions={options}
					selectedCurrency={to}
					amountDisabled
				/>
				<button
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-md active:scale-95 cursor-pointer bg-emerald-400 "
					type="submit"
				>
					Convert
				</button>
			</form>

			<button
				className="px-3 py-1 rounded-md active:scale-95 cursor-pointer bg-sky-400 "
				onClick={swap}
			>
				Swap
			</button>
		</div>
	);
};

export default App;
