import { useAuthStore, useUcabGoStore } from "../../../hooks";

export const ProfilePage = () => {
  const { user } = useAuthStore();
  //   const { clients, stores } = useUcabGoStore();
  //   console.log(user);

  return (
    <div>
      <h1>Perfil</h1>
      <hr />
      <h3>Nombre:</h3>
      <p>{user.name}</p>
      <h3>Correo:</h3>
      <p>{user.email}</p>
      <p className="text-danger">Necesita Trabajo</p>
      {user.type === "stores" && (
        <>
          <p>{user.img}</p>
          <p>{user.desc}</p>
          <p>{user.rif}</p>
          <p>{user.phone}</p>
        </>
      )}
    </div>
  );
};
