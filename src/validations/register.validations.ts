import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  name: yup.string().required("Nome é obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
