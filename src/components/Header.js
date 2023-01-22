import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <img
          className="brand-logo"
          src="https://media.tenor.com/7XKWt1IT8X0AAAAd/foodpanda-delivery.gif"
          alt="logo"
        />
        <span className="brand-name">foodpanda</span>
      </div>
      <ul className="nav-items">
        <Link to="/">
          <li className="item">Home</li>
        </Link>
        <Link to="/about">
          <li className="item">About</li>
        </Link>
        <Link to={"/contact"}>
          <li className="item">Contact</li>
        </Link>
        <Link to={"/order"}>
          <li className="item">Order</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
