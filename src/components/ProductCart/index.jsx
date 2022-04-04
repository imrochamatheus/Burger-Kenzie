import "./styles.css";

const ProductCart = ({ product, currentSale, setCurrentSale }) => {
  const { id, name, category, img } = product;
  const removeFromCart = () => {
    setCurrentSale(currentSale.filter((prod) => prod.id !== id));
  };
  return (
    <div className="product-cart__card">
      <div className="product-cart__image">
        <img src={img} alt={`Imagem ${name}`} />
      </div>
      <div className="product-cart__infos">
        <h3 className="product-cart__infos--title">{name}</h3>
        <p className="product-cart__infos--category">{category}</p>
      </div>
      <button className="product-cart__btn" onClick={removeFromCart}>
        Remover
      </button>
    </div>
  );
};

export default ProductCart;
