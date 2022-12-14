import { useMemo } from "react";
import { useEffect } from "react";
import { useUcabGoStore } from "../../../hooks/useUcabGoStore";
import { AdminProductCard } from "../../components/products";
import { StoreModal } from "../../components/ui/StoreModal";

export const AdminProductsPage = () => {
  const { startLoadingProducts, products } = useUcabGoStore();
  useEffect(() => {
    startLoadingProducts();
  }, [products.length]);

  let sortedProducts = [...products];

  const productsAlphabetical = useMemo(
    () =>
      sortedProducts.sort(function (a, b) {
        if (a.store.name.toLowerCase() < b.store.name.toLowerCase()) return -1;
        if (a.store.name.toLowerCase() > b.store.name.toLowerCase()) return 1;
        return 0;
      }),
    [sortedProducts]
  );

  return (
    <div className="mt-3" style={{ paddingLeft: "240px" }}>
      <h1>Productos ({sortedProducts.length})</h1>
      <StoreModal />
      <ul className="list-group mt-4">
        {productsAlphabetical.map((product) => (
          <AdminProductCard key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};
