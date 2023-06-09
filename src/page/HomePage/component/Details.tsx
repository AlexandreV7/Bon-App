import { useContext } from "react"
import ContextRestaurants, {ContextRestaurantsType,} from "../../../context/ContextRestaurants";
import { useParams } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";
import './Detail.css'
import { HiOutlineInformationCircle } from "react-icons/hi";

// This is a page, should be at the same level as Homepage
export const Details = () => {
    const { restaurants } = useContext<ContextRestaurantsType>(ContextRestaurants);
    const {id} = useParams();
    
    const selectedRestaurant = restaurants.find(restaurant => restaurant.id === (id? parseInt(id) : undefined))
    
    // Nice fallback
    if(!selectedRestaurant){
        return <div>Restaurant introuvable</div>
    }
    
    return (
      <div className="details">
        <h1 className="title-details">{selectedRestaurant.name}</h1>
        <img src={selectedRestaurant.img} className="image-details"></img>
        <div className="information-details">
          <FavoriteButton id={parseInt(id!)} />
          <p>{selectedRestaurant.description_long}</p>
          <li className="menu">
            <ul>{selectedRestaurant.menu.entrees}</ul>
            <ul>{selectedRestaurant.menu.dishes}</ul>
            <ul>{selectedRestaurant.menu.deserts}</ul>
          </li>
          <div className="description_short-container">
            <HiOutlineInformationCircle id="information-logo" />
            <h2 className="description_short">
              {selectedRestaurant.description_short}
            </h2>
          </div>
        </div>
      </div>
    );
}