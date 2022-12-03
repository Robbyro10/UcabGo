import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import {
  AdminProductCard,
  ProductCard,
  ProductList,
} from "../../components/products";
import { StoreModal } from "../../components/ui/StoreModal";

export const AdminProductsPage = () => {
  const { startLoadingProducts, products } = useUcabGoStore();
  useEffect(() => {
    startLoadingProducts();
  }, [products.length]);

  return (
    <div className="mt-3" style={{ paddingLeft: "240px" }}>
      <h1>Productos</h1>
      <StoreModal />
      <ul className="list-group mt-4">
        {products.map((product) => (
          <AdminProductCard key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};
