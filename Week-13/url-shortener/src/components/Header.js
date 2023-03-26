import "./Header.css";

const Header = (props) => {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Shortly
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
        </ul>
      </div>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
