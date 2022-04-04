import "./styles.css";

const ProductCart = () => {
  return (
    <div className="product-cart__card">
      <div className="product-cart__image">
        <img src="https://i.imgur.com/Vng6VzV.png" alt="" />
      </div>
      <div className="product-cart__infos">
        <h3 className="product-cart__infos--title">Hamburguer</h3>
        <p className="product-cart__infos--category">sanduiches</p>
      </div>
      <button className="product-cart__btn">Remover</button>
    </div>
  );
};

export default ProductCart;
