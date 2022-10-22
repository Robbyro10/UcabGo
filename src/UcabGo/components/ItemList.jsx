import { useUcabGoStore } from "../../hooks";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ restaurant }) => {
  const { products } = useUcabGoStore();
  const filteredProducts = products.filter(
    (product) => product.restaurant === restaurant.name
  );

  return (
    <div className="container">
      <div className="row">
        {filteredProducts?.map((product) => (
          <ItemCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};
