import { Card } from "./Card"
import { useContext } from "react";
import ContextRestaurants, {ContextRestaurantsType} from "../../../context/ContextRestaurants";
import './CardList.css'


export const CardList = () => {
    const { restaurants } = useContext<ContextRestaurantsType>(ContextRestaurants);
    return (
      <div className="card-list">
        {restaurants.map((restaurant) => (
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
}