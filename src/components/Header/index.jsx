import "./styles.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <img
          src="./logo.svg"
          alt="Logo burger kenzie"
          className="header__logo"
        />
        <div className="header__search-container">
          <input type="text" placeholder="Digitar pesquisa..." />
          <button>Pesquisar</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
