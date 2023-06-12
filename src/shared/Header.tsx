import './Header.css'

import { Link } from "react-router-dom"


export const Header = () => {
    return (
      <div className="header-style">
        <Link to="/" id="link-header-style">
          <div>BonApp'</div>
        </Link>
        <Link to="/favorites/" id="link-favorite-style">
          <div>Favorites</div>
        </Link>
      </div>
    );
}