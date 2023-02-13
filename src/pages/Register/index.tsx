import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "../../components/Form/style";
import Header from "../../components/Header";
import { registerSchema } from "../../validations/register.validations";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IForm {
  accountSubmit: SubmitHandler<FieldValues>;
}

export interface SubmitFunction {
  email: string;
  name: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();

  const onRegister = (data: SubmitFunction) => {
    api.post("/client", data).then((res) => {
      setTimeout(() => {
        navigate("/");
      }, 2000);
      toast.success("Conta criada!");
      return res.data;
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(registerSchema),
  });
  return (
    <>
      <ToastContainer />
      <Header />
      <FormStyled onSubmit={handleSubmit(onRegister)}>
        <h3>Cadastro</h3>
        <div>
          <label htmlFor="name">Nome completo</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite seu Email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua Senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <button>Cadastrar</button>
        </div>
        <p>Já possui cadastro?</p>

        <Link to={"/"}>Login</Link>
      </FormStyled>
    </>
  );
};

export default Register;
