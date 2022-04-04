import "./styles.css";

const Header = () => {
  return (
    <nav className="header">
      <img src="./logo.svg" alt="Logo burger kenzie" className="header__logo" />
      <div className="header__search-container">
        <input type="text" placeholder="Digitar pesquisa..." />
        <button>Pesquisar</button>
      </div>
    </nav>
  );
};

export default Header;
