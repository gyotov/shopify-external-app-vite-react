import { useState, useEffect } from "react";

export default function useFetchProductsCount() {
  const [count, setCount] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;

    fetch("/api/products-count", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) => console.log(error));
  }, [shouldFetch]);

  return [count, setShouldFetch];
}
