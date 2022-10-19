import { RestaurantCard } from "./RestaurantCard";
import { useUcabGoStore } from "../../hooks/useUcabGoStore";

export const RestaurantList = () => {
  const { restaurants } = useUcabGoStore();
  return (
    <div className="container">
      <div className="row">
        {restaurants[0].map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};
