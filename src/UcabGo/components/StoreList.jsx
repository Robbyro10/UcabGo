import { StoreCard } from "./StoreCard";
import { useUcabGoStore } from "../../hooks/useUcabGoStore";

export const StoreList = () => {
  const { stores } = useUcabGoStore();

  return (
    <div className="container">
      <div className="row">
        {stores.map((store) => (
          <StoreCard key={store._id} {...store} />
        ))}
      </div>
    </div>
  );
};
