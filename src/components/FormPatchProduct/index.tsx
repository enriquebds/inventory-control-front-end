import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { productPatchSchema } from "../../validations/product.validations";
import { FormStyled } from "./style";

export interface IForm {
  accountSubmit: SubmitHandler<FieldValues>;
}

export interface SubmitFunction {
  name?: string;
  category?: string;
  price?: number;
}

const FormProductPatch = ({ accountSubmit }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(productPatchSchema),
  });

  return (
    <FormStyled onSubmit={handleSubmit(accountSubmit)}>
      <h3>Atualizar Produto</h3>
      <div>
        <label htmlFor="name">Nome</label>
        <input type="name" placeholder="Digite o nome" {...register("name")} />

        <label htmlFor="category">Categoria</label>
        <input
          type="category"
          placeholder="Digite a categoria"
          {...register("category")}
        />

        <label htmlFor="price">Preço</label>
        <input
          type="price"
          placeholder="Digite o preço"
          {...register("price")}
        />
        <button>Salvar</button>
      </div>
    </FormStyled>
  );
};

export default FormProductPatch;
