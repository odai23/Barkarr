import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav id="home" className="navbar-container">
      <div className="logo">
        <img className="logo_footer" src="./images/barkalogo.png" alt="Logo" />
      </div>
      <div className="logo-text">
        check out the best greek food experience in prague
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#cocktails">Menu</a>
        </li>
        <li>
          <a href="#about">Our Bar</a>
        </li>
        <li>
          <a href="#contact">Products</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
