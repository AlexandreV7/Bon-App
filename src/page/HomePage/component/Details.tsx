import { useContext } from "react"
import ContextRestaurants, {ContextRestaurantsType,} from "../../../context/ContextRestaurants";
import { useParams } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";

export const Details = () => {
    const { restaurants } = useContext<ContextRestaurantsType>(ContextRestaurants);
    const {id} = useParams();
    
    const selectedRestaurant = restaurants.find(restaurant => restaurant.id === (id? parseInt(id) : undefined))
    
    if(!selectedRestaurant){
        return <div>Restaurant introuvable</div>
    }
    
    return (
      <div>
        <h1>{selectedRestaurant.name}</h1>
        <img src={selectedRestaurant.img}></img>
         <FavoriteButton id={parseInt(id!)}/> 
        <h2>{selectedRestaurant.description_short}</h2>
        <p>{selectedRestaurant.description_long}</p>
        <li>
          <ul>{selectedRestaurant.menu.entrees}</ul>
          <ul>{selectedRestaurant.menu.dishes}</ul>
          <ul>{selectedRestaurant.menu.deserts}</ul>
        </li>
      </div>
    );
}