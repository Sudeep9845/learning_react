import React, { useId } from "react";

const InputCard = ({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectedCurrency = "usd",
	amountDisabled = false,
	currencyDisabled = false,
	className = "",
}) => {
	const id = useId();
	return (
		<div
			className={`w-full h-1/2 rounded-md flex justify-between items-center  bg-white/80 p-4 text-zinc-800 ${className}`}
		>
			<div className="w-1/2 h-full flex flex-col gap-2">
				<label htmlFor={id}>{label}</label>
				<input
					type="number"
					name=""
					placeholder="Amount"
					id={id}
					className="border-none px-2 py-1 rounded-md bg-zinc-800 outline-none text-white"
					value={amount}
					disabled={amountDisabled}
					onChange={(e) =>
						onAmountChange && onAmountChange(Number(e.target.value))
					}
				/>
			</div>
			<div className="w-1/2 h-full flex flex-col gap-2 items-end">
				<label htmlFor="">Currency</label>
				<select
					name=""
					id=""
					value={selectedCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
					disabled={currencyDisabled}
				>
					{currencyOptions.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default InputCard;
