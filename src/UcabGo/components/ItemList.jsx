import { restaurants } from "../data/restaurants";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ restaurant }) => {
  const menu = restaurant.menu;
  return (
    <div className="container">
      <div className="row">
        {menu?.map((item) => (
          <ItemCard key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  );
};
