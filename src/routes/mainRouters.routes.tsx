import { Route, Routes, useLocation } from "react-router-dom";
import ClientDashboard from "../pages/ClientDashboard/index";
import Login from "../pages/Login";
import Register from "../pages/Register";

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ClientDashboard />} />
    </Routes>
  );
};

export default MainRoutes;
