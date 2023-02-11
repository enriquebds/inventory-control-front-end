import { ReactNode } from "react";
import ProductProvider from "./Products/ProductsContext";
import UserProvider from "./User/UserContext";

interface IContext {
  children: ReactNode;
}

const Context = ({ children }: IContext) => {
  return (
    <UserProvider>
      <ProductProvider>{children}</ProductProvider>
    </UserProvider>
  );
};

export default Context;
