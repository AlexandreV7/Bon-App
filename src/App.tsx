import React from "react";
import "./App.css";


import ContextRestaurants from "./context/ContextRestaurants";


import { restaurants } from "./data";
import { HomePage } from "./page/HomePage/HomePage";
import { Details } from "./page/HomePage/component/Details";
import { Favorites } from "./page/HomePage/component/Favorites";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from "./shared/Header";

import { ContextFavoritesProvider } from "./context/ContextFavorites";

function App() {
  const restaurantsData = restaurants;

  return (
    <div className="App">
      <Header />
      <ContextRestaurants.Provider value={{ restaurants: restaurantsData }}>
        <ContextFavoritesProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites/" element={<Favorites />} />
          </Routes>
        </ContextFavoritesProvider>
      </ContextRestaurants.Provider>
    </div>
  );
}

export default App;
