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
    <>
      <StoreModal />
      <div className="mt-4" style={{ paddingLeft: "240px" }}>
        {products.map((product) => (
          <AdminProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
