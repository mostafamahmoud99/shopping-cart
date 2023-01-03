import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductApiContext = createContext([]);

export default function ProductApiContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterr, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    let { data } = await axios.get(`https://fakestoreapi.com/products`);
    setData(data);
    setFilter(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductApiContext.Provider value={{ data , loading , filterr ,setFilter }}>
      {children}
    </ProductApiContext.Provider>
  );
}

export const GetAData = () => {
  return useContext(ProductApiContext);
};
