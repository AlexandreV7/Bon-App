import { useContextFavorites } from "../../../context/ContextFavorites"
import './FavoriteButton.css'

interface FavoriteButtonProps{
    id:number
}

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
 
    return(
        <input
            type="checkbox"
            checked={isFavorites}
            onChange={handleChange}
            className="input-style"
            />
    )
}