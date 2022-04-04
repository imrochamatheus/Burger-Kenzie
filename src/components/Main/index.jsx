import "./styles.css";
import Cart from "../Cart";
import { useState } from "react";
import ProductList from "../ProductList";

const Main = ({ products }) => {
  const [currentSale, setCurrentSale] = useState([]);

  return (
    <div className="main__container">
      <ProductList {...{ products, currentSale, setCurrentSale }} />
      <Cart {...{ currentSale, setCurrentSale }} />
    </div>
  );
};

export default Main;
