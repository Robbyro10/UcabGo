import { useUcabGoStore } from "../../../hooks";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ store }) => {
  const { products } = useUcabGoStore();
  const storeProducts = products.filter(
    (product) => product.store._id == store._id
  );
  if (!storeProducts.length) {
    return (
      <div className="text-muted text-center m-4 p-4">
        <h2>No se han agregado productos en este establecimiento.</h2>
        <br />
        <p>Vuelva mas tarde</p>
      </div>
    );
  }

  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row">
        {storeProducts?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
