import { useUcabGoStore } from "../../hooks";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ store }) => {
  const { products } = useUcabGoStore();
  //635c14dd9792c111dcedfa5f store._id
  const filteredProducts = products.filter(
    (product) => product.store == store._id
  );
  // console.log(filteredProducts);

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
