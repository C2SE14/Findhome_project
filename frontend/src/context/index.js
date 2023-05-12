import React, { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productType, setProductType] = useState("");

  const setProductTypeValue = (type) => {
    setProductType(type);
  };

  return (
    <ProductContext.Provider value={{ productType, setProductTypeValue }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
