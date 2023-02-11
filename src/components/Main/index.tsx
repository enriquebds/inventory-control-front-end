import { useContext } from "react";
import { ProductContext } from "../../context/Products/ProductsContext";
import { StyledMain } from "./style";

const Main = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <StyledMain>
        <section>
          <div>
            <p>Produtos</p>
            <input type="text" placeholder="Pesquisar Produto..." />
          </div>

          <ul>
            {products.length ? (
              products.map((product) => (
                <li>
                  <b>{product.name}</b>
                  <p>{product.category}</p>
                  <button>Adicionar</button>
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </section>
      </StyledMain>
    </>
  );
};

export default Main;
