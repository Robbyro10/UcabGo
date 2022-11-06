import { useUcabGoStore } from "../../../hooks";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ store }) => {
  const { products } = useUcabGoStore();
  const filteredProducts = products.filter(
    (product) => product.store == store._id
  );

  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} {...product} store={store} />
        ))}
      </div>
    </div>
  );
};
