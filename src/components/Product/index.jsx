import "./styles.css";

const Product = ({ product: { category, name, price, img, id } }) => {
  return (
    <li className="product">
      <div
        className="product__header"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="product__body">
        <h3 className="product__body--name">{name}</h3>
        <p className="product__body--category">{category}</p>
        <p className="product__body--price">{price}</p>
        <button className="product__body--btn">Adicionar</button>
      </div>
    </li>
  );
};

export default Product;
