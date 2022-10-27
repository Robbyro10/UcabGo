import { useUcabGoStore } from "../../hooks";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ store }) => {
  const { products } = useUcabGoStore();
  const filteredProducts = products.filter(
    (product) => product.store.name === store.name
  );

  return (
    <div className="container">
      <div className="row">
        {filteredProducts?.map((product) => (
          <ItemCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
