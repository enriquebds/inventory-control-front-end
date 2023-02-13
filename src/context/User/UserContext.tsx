import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IProductCart } from "../../components/Main";
import api from "../../services/api";

interface IUserProvider {
  children: ReactNode;
}

export interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  productsCart: IProductCart[];
  setProductsCart: React.Dispatch<React.SetStateAction<IProductCart[]>>;
}

export interface IUser {
  name: string;
  email: string;
  isManager?: string;
  id: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLogged, setIsLogged] = useState(false);
  const [productsCart, setProductsCart] = useState<IProductCart[]>(
    {} as IProductCart[]
  );
  const token = window.localStorage.getItem("@TOKEN") as string;

  useEffect(() => {
    const loadUser = async () => {
      const userID = window.localStorage.getItem("@USERID");
      const isManager = window.localStorage.getItem("@ISMANAGER");

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          setIsLogged(true);

          if (isManager) {
            await api
              .get(`/manager/${userID}`)
              .then((res) => {
                console.log(res.data);
                setUser(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            await api
              .get(`/client/${userID}`)
              .then((res) => {
                setProductsCart(res.data.cart);
                setUser(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        } catch (err) {
          console.log(err);
        }
      }
    };

    loadUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        productsCart,
        setProductsCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
