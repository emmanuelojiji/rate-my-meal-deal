import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

import { getAuth } from "firebase/auth";

const PrivateRoute = () => {
  const auth = getAuth();

  const [userLoggedIn, setUserLoggedIn] = useState(auth.currentUser);

  return userLoggedIn ? <Outlet /> : <Navigate to="/access" />;
};

export default PrivateRoute;
