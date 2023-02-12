import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  IProduct,
  ProductContext,
} from "../../context/Products/ProductsContext";
import "react-toastify/dist/ReactToastify.css";
import { Cart, FormStyled, StyledMain } from "./style";
import api from "../../services/api";
import { UserContext } from "../../context/User/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../../validations/product.validations";
import ModalBase from "../ModalBase";
import FormProductPatch from "../FormPatchProduct";

export interface IProductCart {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface SubmitFunction {
  name: string;
  category: string;
  description: string;
  price: number;
}

interface PatchFunction {
  name?: string;
  category?: string;
  price?: number;
}

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { products, setProducts } = useContext(ProductContext);
  const { user, productsCart, setProductsCart } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const [productId, setProductId] = useState("");
  const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);

  useEffect(() => {
    const filteredInput = (str: string) => {
      let search = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const filter = products.filter((prod) => {
        let name = prod.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let category = prod.category
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (name.includes(search) || category.includes(search)) {
          return prod;
        }
      });

      setProductsFiltered(filter);
    };

    filteredInput(userInput);
  }, [userInput, products]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(productSchema),
  });

  const handleClick = (productId: string) => {
    api
      .post(`/client/product/${productId}/${user.id}`)
      .then((res) => {
        setProductsCart(res.data.client.cart);
      })
      .catch((err) => {
        toast.error("Você precisa estar logado!");
      });
  };
  const removeProdCart = (product: IProductCart) => {
    const removeProd = productsCart.filter((prod) => {
      return prod !== product;
    });

    setProductsCart(removeProd);
    toast.error("Item removido com sucesso!");
  };

  const patchProduct = (data: PatchFunction) => {
    api.patch(`/product/${productId}`, data).then((_) => {
      setIsOpenModal(false);
      toast.success("Produto atualizado!");
    });
  };

  const deleteProduct = (productId: string) => {
    api.delete(`/product/${productId}`).then((_) => {
      toast.success("Producto deletado!");
    });
  };

  const createProduct = async (data: SubmitFunction) => {
    api.post(`/product/manager/${user.id}`, data).then((res) => {
      setProducts((old) => [...old, res.data]);
      toast.success("Produto Criado!");
    });
  };

  return (
    <>
      <ToastContainer />
      <StyledMain>
        <section>
          <div>
            <p>Produtos</p>
            <input
              type="text"
              placeholder="Pesquisar Produto..."
              onChange={(event) => {
                setUserInput(event.target.value);
              }}
            />
          </div>

          <ul>
            {userInput.trim().length === 0
              ? products.map((product) => (
                  <li
                    key={product.id}
                    onClick={() => {
                      if (user.isManager) {
                        setIsOpenModal(true);
                        setProductId(product.id);
                      }
                    }}
                  >
                    <b>{product.name}</b>
                    <p>{product.category}</p>
                    <p>
                      {" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(Number(product.price))}
                    </p>
                    {!user.isManager ? (
                      <button
                        onClick={() => {
                          handleClick(product.id);
                        }}
                      >
                        Adicionar
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          deleteProduct(product.id);
                        }}
                      >
                        Deletar
                      </button>
                    )}
                  </li>
                ))
              : productsFiltered.map((product) => (
                  <li
                    key={product.id}
                    onClick={() => {
                      if (user.isManager) {
                        setIsOpenModal(true);
                      }
                    }}
                  >
                    <b>{product.name}</b>
                    <p>{product.category}</p>
                    <p>
                      {" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(Number(product.price))}
                    </p>
                    {!user.isManager ? (
                      <button
                        onClick={() => {
                          handleClick(product.id);
                        }}
                      >
                        Adicionar
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          deleteProduct(product.id);
                        }}
                      >
                        Deletar
                      </button>
                    )}
                  </li>
                ))}

            {products.length === 0 || productsFiltered.length === 0 ? (
              <p>Produto não encontrado!</p>
            ) : null}
          </ul>
        </section>
        {!user.isManager ? (
          <Cart>
            <div>
              <p>Carrinho de compras</p>
            </div>

            <section>
              <ul>
                {productsCart.length > 0 ? (
                  productsCart.map((product, index) => (
                    <li key={product.id}>
                      <b>{product["name"]}</b>
                      <p>{product["category"]}</p>
                      <button
                        onClick={() => {
                          console.log(product);
                          removeProdCart(product);
                        }}
                      >
                        Remover
                      </button>
                    </li>
                  ))
                ) : (
                  <div>
                    <h2>Sua sacola está vazia</h2>
                    <p>Adicione itens</p>
                  </div>
                )}
              </ul>
              {productsCart.length > 0 ? <button>Comprar</button> : null}
            </section>
          </Cart>
        ) : (
          <FormStyled onSubmit={handleSubmit(createProduct)}>
            <h3>Cadastrar Produto</h3>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="name"
                placeholder="Digite o nome"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>

              <label htmlFor="category">Categoria</label>
              <input
                type="category"
                placeholder="Digite a categoria"
                {...register("category")}
              />
              <span>{errors.category?.message}</span>

              <label htmlFor="description">Descrição</label>
              <input
                type="description"
                placeholder="Digite a descrição"
                {...register("description")}
              />
              <span>{errors.description?.message}</span>

              <label htmlFor="price">Preço</label>
              <input
                type="price"
                placeholder="Digite o preço"
                {...register("price")}
              />
              <span>{errors.price?.message}</span>

              <button>Entrar</button>
            </div>
          </FormStyled>
        )}
      </StyledMain>

      {isOpenModal ? (
        <ModalBase setIs={setIsOpenModal}>
          <FormProductPatch accountSubmit={patchProduct} />
        </ModalBase>
      ) : null}
    </>
  );
};

export default Main;
