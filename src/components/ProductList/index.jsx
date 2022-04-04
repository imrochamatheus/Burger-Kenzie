import "./styles.css";
import Product from "../Product";

const ProductList = ({ products, currentSale, setCurrentSale }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          {...{ currentSale, setCurrentSale }}
        />
      ))}
    </ul>
  );
};

export default ProductList;
