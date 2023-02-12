import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  category: yup.string().required("Categoria obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
  price: yup.number().required("Preço é obrigatório"),
});
