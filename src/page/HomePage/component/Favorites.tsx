import { useContextFavorites } from "../../../context/ContextFavorites";
import { Card } from "./Card";
import ContextRestaurants from "../../../context/ContextRestaurants";
import { ContextRestaurantsType } from "../../../context/ContextRestaurants";
import { useContext, useEffect, useState } from "react";


export const Favorites = () => {

    const {favorites} = useContextFavorites();
    const {restaurants} = useContext<ContextRestaurantsType>(ContextRestaurants);

    const favoriteRestaurant = restaurants.filter((restaurant) => {
        return (
          favorites.includes(restaurant.id) );
    })


    return (
        <div>
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
    );
};
