import "./styles.css";
import { convertToBRL } from "../../assets/functions";

const Product = ({
  product: { category, name, price, img, id },
  currentSale,
  setCurrentSale,
}) => {
  const addToCart = () => {
    const isTheProductInTheCart = currentSale.findIndex(
      (forSaleProduct) => forSaleProduct.id === id
    );

    if (isTheProductInTheCart === -1) {
      setCurrentSale([...currentSale, { category, name, price, img, id }]);
    }
  };
  return (
    <li className="product">
      <div
        className="product__header"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="product__body">
        <h3 className="product__body--name">{name}</h3>
        <p className="product__body--category">{category}</p>
        <p className="product__body--price">{convertToBRL(price)}</p>
        <button className="product__body--btn" value={id} onClick={addToCart}>
          Adicionar
        </button>
      </div>
    </li>
  );
};

export default Product;
