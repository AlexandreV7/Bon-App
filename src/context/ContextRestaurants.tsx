import React, { createContext } from "react";
import { Restaurant } from "../models/Restaurant";

export type ContextRestaurantsType = {
  restaurants: Restaurant[];
};

const ContextRestaurants = createContext<ContextRestaurantsType>({
  restaurants: [],
});

export default ContextRestaurants;
