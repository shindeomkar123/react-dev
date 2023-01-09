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
        <li className="item">Home</li>
        <li className="item">About</li>
        <li className="item">Cart</li>
        <li className="item">Order</li>
      </ul>
    </div>
  );
};

export default Header;
