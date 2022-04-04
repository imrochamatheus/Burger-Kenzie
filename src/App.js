import { useEffect, useState } from "react";

import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      {products && <Main products={products} />}
    </>
  );
}

export default App;
