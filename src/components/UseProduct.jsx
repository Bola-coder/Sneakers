import { useState, useEffect, useContext } from "react";
import { ProductContext } from "./context/ProductContext";

const UseProduct = (url) => {
  const [products, setProducts] = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, { signal: signal })
      .then((response) => response.json())
      .then((data) => {
        // data = data.results;
        // console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        if (err.message === "AbortError") {
          setError("Failed to fetch data from database");
        } else {
          setError(err.message);
        }
      });

    return () => {
      controller.abort();
    };
  }, [url, setProducts]);
  return [products, loading, error];
};

export default UseProduct;
