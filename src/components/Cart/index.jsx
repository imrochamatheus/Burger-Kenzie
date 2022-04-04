import "./styles.css";
import ProductCart from "../ProductCart";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__header">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="cart__body">
        <ProductCart />
      </div>
      <div className="cart__footer">
        <div className="cart__footer--price">
          <p>Total</p>
          <p>R$ 40.00</p>
        </div>
        <button>Remover Todos</button>
      </div>
    </div>
  );
};

export default Cart;
