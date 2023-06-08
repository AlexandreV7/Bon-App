import { createContext, useContext, useEffect, useState } from "react"
import { Modal } from "../page/HomePage/component/Modal";

type ContextFavoritesType = {
    favorites: number[]
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
};

const ContextFavorites = createContext<ContextFavoritesType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
} ); 

export const useContextFavorites = () => useContext(ContextFavorites);

export const ContextFavoritesProvider = ({children} : any) => {

    const [favorites, setFavorites] = useState<number[]>([]);
    const [showModal, setShowModal] = useState(false)
    const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);

    useEffect(() => {
        const dataLocalStorageStr = localStorage.getItem("restaurantId");
        if (dataLocalStorageStr) {
          const dataLocalStorage: number[] = JSON.parse(dataLocalStorageStr);
          setFavorites(dataLocalStorage);
        }
    }, []);

    const addFavorite = (id : number) => {
        setFavorites((prevFavorites) => {
          const updatedFavorites = [...prevFavorites, id];
          localStorage.setItem("restaurantId",JSON.stringify(updatedFavorites));
          return updatedFavorites;
        });
    };

   const removeFavorite = (id: number) => {
     setSelectedRestaurant(id);
     setShowModal(true);
   };

   const handleConfirmModal = () => {
     if (selectedRestaurant != null) {
       setFavorites((prevFavorites) =>
         prevFavorites.filter((favoriteId) => favoriteId !== selectedRestaurant)
       );
       localStorage.setItem(
         "restaurantId",
         JSON.stringify(
           favorites.filter((favoriteId) => favoriteId !== selectedRestaurant)
         )
       );
     }
     setShowModal(false);
     setSelectedRestaurant(null);
   };
  

    return (
      <ContextFavorites.Provider
        value={{ favorites, addFavorite, removeFavorite }}
      >
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            onConfirm={handleConfirmModal}
          />
        )}
        {children}
      </ContextFavorites.Provider>
    );
}
