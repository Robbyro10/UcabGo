import { RestaurantCard } from "./RestaurantCard";
import { useUcabGoStore } from "../../hooks/useUcabGoStore";

export const RestaurantList = () => {
  const { restaurants } = useUcabGoStore();
  return (
    <div className="container">
      <div className="row">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};
