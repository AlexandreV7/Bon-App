import { useContextFavorites } from "../../../context/ContextFavorites"
import './FavoriteButton.css'
import { AiOutlineHeart } from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai"

interface FavoriteButtonProps{
    id:number
} 

// This is really a good way of using React ;)
// Small and reusable components containing only the relevant
export const FavoriteButton = ({id}: FavoriteButtonProps) => {

    const {favorites, addFavorite, removeFavorite} = useContextFavorites()
   
    const isFavorites = favorites.includes(id);

    const handleChange = () => {
      if (isFavorites) {
        removeFavorite(id);
      } else {
        addFavorite(id);
      }
    };
 
    return (
      <div className="favorite-button">
        <label htmlFor="checkbox" className="heart-checkbox">
          <input
            type="checkbox"
            checked={isFavorites}
            onChange={handleChange}
            className="checkbox"
          />
          {isFavorites ? (
            <AiFillHeart className="heart-icon filled" />
          ) : (
            <AiOutlineHeart className="heart-icon" />
          )}
        </label>
      </div>
    );
}