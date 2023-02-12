import { HeaderStyled } from "./style";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User/UserContext";

const Header = () => {
  const { isLogged, setIsLogged } = useContext(UserContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    setIsLogged(false);
    navigate("/", { replace: true });
  };

  return (
    <>
      <HeaderStyled>
        {" "}
        <h1>Inventory Control</h1>{" "}
        <div>
          {isLogged ? (
            <button onClick={logout}>Sair</button>
          ) : (
            <button
              onClick={() => {
                navigate("/", { replace: true });
              }}
            >
              Login
            </button>
          )}
          {!isLogged ? (
            <button
              onClick={() => {
                navigate("/dashboard", { replace: true });
              }}
            >
              Produtos
            </button>
          ) : null}
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
