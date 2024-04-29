import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const DefaultLayout = () => {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/Login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
