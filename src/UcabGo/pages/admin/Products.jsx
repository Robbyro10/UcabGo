import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { ProductCard, ProductList } from "../../components/products";
import { StoreModal } from "../../components/ui/StoreModal";

export const Products = () => {
  const { startLoadingProducts, products } = useUcabGoStore();
  useEffect(() => {
    startLoadingProducts();
  }, []);

  return (
    <>
      <StoreModal />
      <div style={{ paddingLeft: "240px" }}>
        <p>{JSON.stringify(products)}</p>
      </div>
    </>
  );
};
