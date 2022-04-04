import "./styles.css";

const Header = ({ products, filteredProducts, setFilteredProducts }) => {
  const convertToLowerCase = (text) => text.toLowerCase();

  const filterProducts = ({ target: { value } }) => {
    const newFilteredProducts = products.filter(
      ({ name, category }) =>
        convertToLowerCase(name).includes(convertToLowerCase(value)) ||
        convertToLowerCase(category).includes(convertToLowerCase(value))
    );

    setFilteredProducts(
      newFilteredProducts.length ? newFilteredProducts : null
    );
  };
  return (
    <nav>
      <div className="header">
        <img
          src="./logo.svg"
          alt="Logo burger kenzie"
          className="header__logo"
        />
        <div className="header__search-container">
          <input
            type="text"
            onChange={filterProducts}
            placeholder="Digitar pesquisa..."
          />
          <button>Pesquisar</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
