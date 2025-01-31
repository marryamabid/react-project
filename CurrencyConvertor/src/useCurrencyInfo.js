import React, { useState, useEffect } from "react";

function useCurrencyInfo(currency) {  // Accept `currency` as a parameter
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;  // Prevent API call if currency is undefined

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);  // Add `currency` as a dependency

  return data;
}

export default useCurrencyInfo;
