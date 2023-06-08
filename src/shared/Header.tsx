import './Header.css'

import { Link } from "react-router-dom"
import { Favorites } from "../page/HomePage/component/Favorites"

export const Header = () => {
    return (
      <div className="header-style">
        <Link to="/" id="link-header-style">
          <div>BonApp'</div>
        </Link>
        <Link to="/favorites/" id="link-favorite-style">
          <div>Favorite</div>
        </Link>
      </div>
    );
}