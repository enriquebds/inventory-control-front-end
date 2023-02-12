import { useContext } from "react";
import Form, { SubmitFunction } from "../../components/Form";
import Header from "../../components/Header";
import { UserContext } from "../../context/User/UserContext";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { isLogged, setIsLogged, setUser } = useContext(UserContext);

  const onSubmitFunction = (data: SubmitFunction) => {
    api
      .post("/login", data)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.userId);
        const token = window.localStorage.getItem("@TOKEN") as string;
        const decoded = jwtDecode(token);
        const { isManager }: any = decoded;

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const userId = window.localStorage.getItem("@USERID");

        setIsLogged(true);

        if (isManager) {
          api.get(`/manager/${userId}`).then((res) => {
            window.localStorage.setItem("@ISMANAGER", res.data.isManager);
            setUser(res.data);
            navigate("/dashboard", { replace: true });
          });
        } else if (!isManager) {
          navigate("/dashboard", { replace: true });
        }
      })
      .catch((err) => {
        toast.error("Email ou senha incorreto(s)");
        console.log(err);
      });
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <Form accountSubmit={onSubmitFunction} />
    </>
  );
};

export default Login;
