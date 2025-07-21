import { Navigate, Route, Routes } from "react-router-dom";
import TransportAndLogistics from "./container/pages/transportAndLogistics/TransportAndLogisticsHomePage";
import User from "./container/pages/transportAndLogistics/UserPage";
import Order from "./container/pages/transportAndLogistics/OrderPage";
import Driver from "./container/pages/transportAndLogistics/DriverPage";
import Companies from "./container/pages/transportAndLogistics/companies/RegisteredCompanies";
import Layout from "./container/pages/Layout";
import Profile from "./container/pages/transportAndLogistics/companies/CompanyDashboard";
import ProfileDetails from "./container/pages/transportAndLogistics/companies/ProfileDetails";
import Orders from "./container/pages/transportAndLogistics/companies/Orders";
import Rating from "./container/pages/transportAndLogistics/companies/Rating";
import SalesHistory from "./container/pages/transportAndLogistics/companies/SalesHistory";
import Ticket from "./container/pages/transportAndLogistics/companies/Ticket";
import Earning from "./container/pages/transportAndLogistics/companies/Earning";
import Vehicles from "./container/pages/transportAndLogistics/companies/Vehicles";
import Branches from "./container/pages/transportAndLogistics/companies/Branches";
import EmployeeDetails from "./container/pages/transportAndLogistics/companies/EmployeeDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="transportAndLogistics"
          element={<TransportAndLogistics />}
        />
        <Route path="companies" element={<Companies />} />
        <Route path="companies/:customerID" element={<Profile />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<ProfileDetails />} />
          <Route path="order" element={<Orders />} />
          <Route path="rating" element={<Rating />} />
          <Route path="sellHistory" element={<SalesHistory />} />
          <Route path="ticket" element={<Ticket />} />
          <Route path="earning" element={<Earning />} />
          <Route path="vehicle" element={<Vehicles />} />
          <Route path="branch" element={<Branches />} />
        </Route>
        <Route
          path="companies/:customerID/employees"
          element={<EmployeeDetails />}
        />
        <Route path="user" element={<User />} />
        <Route path="order" element={<Order />} />
        <Route path="driver" element={<Driver />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
