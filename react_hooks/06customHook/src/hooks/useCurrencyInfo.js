import { useEffect, useState } from "react";

/**
 * Custom hook to fetch currency exchange rates based on a currency code.
 * @param {string} currency - The base currency code (e.g., 'usd', 'inr').
 * @returns {object} - An object containing exchange rates for the given currency.
 */
const useCurrencyInfo = (currency) => {
	// State to hold the fetched currency data
	const [data, setData] = useState({});

	useEffect(() => {
		// Asynchronous function to fetch data from the API
		const fetchData = async () => {
			try {
				// Call the API endpoint for the specific currency
				const response = await fetch(
					`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
				);

				// Parse the JSON response
				const result = await response.json();
				// Update state with the data specific to the requested currency
				setData(result[currency]);
				console.log(result);
				console.log(result[currency]);
			} catch (error) {
				console.error("Error fetching currency data:", error);
			}
		};

		fetchData();
		// Dependency array: Re-run this effect whenever the 'currency' prop changes
	}, [currency]);
	return data;
};

export default useCurrencyInfo;
