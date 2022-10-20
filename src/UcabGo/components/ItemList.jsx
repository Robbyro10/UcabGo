import { useUcabGoStore } from "../../hooks";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ restaurant }) => {
  const { products } = useUcabGoStore();

  return (
    <div className="container">
      <div className="row">
        {products?.map((product) => (
          <ItemCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};
