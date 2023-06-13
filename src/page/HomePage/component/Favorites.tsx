import { useContextFavorites } from "../../../context/ContextFavorites";
import { Card } from "./Card";
import ContextRestaurants from "../../../context/ContextRestaurants";
import { ContextRestaurantsType } from "../../../context/ContextRestaurants";
import { useContext} from "react";
import './Favorites.css'
import { AiFillHeart } from "react-icons/ai";

// This is a page, should be at the same level as Homepage
export const Favorites = () => {

    const {favorites} = useContextFavorites();
    const {restaurants} = useContext<ContextRestaurantsType>(ContextRestaurants);

    const favoriteRestaurant = restaurants.filter((restaurant) => {
        return (
          favorites.includes(restaurant.id) );
    })


    return (
      <div className="favorites">
        <h1 className="favorite-title">Your favorites</h1>
        <AiFillHeart id="heart-icon" />
        <div className="container">
          {favoriteRestaurant.map((restaurant) => (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              address={restaurant.address}
              imgPath={restaurant.img}
              description_short={restaurant.description_short}
            />
          ))}
        </div>
      </div>
    );
};
