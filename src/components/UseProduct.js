import { useState, useEffect, useContext } from "react";
import { ProductContext } from "./context/ProductContext";

const UseProduct = (url, options) => {
  const [products, setProducts] = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        data = data.results;
        console.log(data);
        const filteredData = data.filter(
          (element) => element.image.original !== ""
        );
        setProducts(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, [url]);
  return [products, loading, error];
};

export default UseProduct;
