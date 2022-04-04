import "./styles.css";
import Cart from "../Cart";
import ProductList from "../ProductList";

const Main = ({ products }) => {
  return (
    <div className="main__container">
      <ProductList {...{ products }} />
      <Cart />
    </div>
  );
};

export default Main;
