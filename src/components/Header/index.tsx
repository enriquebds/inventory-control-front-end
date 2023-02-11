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
        {isLogged ? <button onClick={logout}>Sair</button> : null}
      </HeaderStyled>
    </>
  );
};

export default Header;
