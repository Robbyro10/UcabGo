import { RestaurantCard } from "./RestaurantCard";
import { restaurants } from "../data/restaurants";

export const RestaurantList = () => {
  return (
    <div className="container">
      <div className="row">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};
