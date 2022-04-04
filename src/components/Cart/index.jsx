import "./styles.css";
import { useEffect, useState } from "react";
import ProductCart from "../ProductCart";
import { convertToBRL } from "../../assets/functions";

const Cart = ({ currentSale, setCurrentSale }) => {
  const removeAll = () => setCurrentSale([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(currentSale.reduce((acc, { price }) => acc + price, 0));
  }, [currentSale]);

  return (
    <div className="cart">
      <div className="cart__header">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="cart__body">
        {currentSale.length ? (
          <ul>
            {currentSale.map((product) => (
              <ProductCart
                key={product.id}
                {...{ product, setCurrentSale, currentSale, setCartTotal }}
                setCartTotal={setCartTotal}
              />
            ))}
          </ul>
        ) : (
          <div className="cart__body--empty-message">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        )}
      </div>
      <div className="cart__footer">
        <div className="cart__footer--price">
          <p>Total</p>
          <p>{convertToBRL(cartTotal)}</p>
        </div>
        <button onClick={removeAll}>Remover Todos</button>
      </div>
    </div>
  );
};

export default Cart;
