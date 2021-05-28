import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await axios
        .get("http://127.0.0.1:3000/product")
        .then((response) => setProductData(response.data.product));
    })();
  }, [productData]);

  return (
    <DataContext.Provider value={productData}>{children}</DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}

export default DataContextProvider;
