import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { IUser } from "../User/UserContext";

interface IProductProvider {
  children: ReactNode;
}

export interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface IProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

const ProductProvider = ({ children }: IProductProvider) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const listProducts = async () => {
      const { data } = await api.get("/product");

      setProducts(data);
    };

    listProducts();
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
