import { useUcabGoStore } from "../../hooks";
import { RestaurantList } from "../components";

export const UcabGoPage = () => {
  const { restaurants } = useUcabGoStore();
  return (
    <>
      {!restaurants.lenght === 0 ? (
        <>
          <h1>Ooops!!</h1>
          <p>
            No hay establecimientos disponibles por el momento, intente mas
            tarde.
          </p>
        </>
      ) : (
        <>
          <h1>Haga su Pedido!</h1>
          <hr />
          <ul>
            <RestaurantList />
          </ul>
        </>
      )}
    </>
  );
};
