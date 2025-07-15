import { Route, Routes } from "react-router-dom";
import TransportAndLogistics from "./container/pages/transportAndLogistics/TransportAndLogisticsHomePage";
import User from "./container/pages/transportAndLogistics/UserPage";
import Order from "./container/pages/transportAndLogistics/OrderPage";
import Driver from "./container/pages/transportAndLogistics/DriverPage";
import Company from "./container/pages/transportAndLogistics/company/CompaniesDetail";
import Layout from "./container/pages/Layout";
import Profile from "./container/pages/transportAndLogistics/company/CompanyDashboard";
import ProfileDetails from "./container/pages/transportAndLogistics/company/ProfileDetails";
import Orders from "./container/pages/transportAndLogistics/company/Orders";
import Rating from "./container/pages/transportAndLogistics/company/Rating";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="transportAndLogistics"
          element={<TransportAndLogistics />}
        />
        <Route path="company" element={<Company />} />
        <Route path="company/:customerID" element={<Profile />}>
          <Route index element={<ProfileDetails />} />
          <Route path="profile" element={<ProfileDetails />} />
          <Route path="order" element={<Orders />} />
          <Route path="rating" element={<Rating />} />
          <Route path="sellHistory" element={<ProfileDetails />} />
          <Route path="ticket" element={<ProfileDetails />} />
          <Route path="earning" element={<ProfileDetails />} />
          <Route path="vehicle" element={<ProfileDetails />} />
          <Route path="branch" element={<ProfileDetails />} />
        </Route>
        <Route path="user" element={<User />} />
        <Route path="order" element={<Order />} />
        <Route path="driver" element={<Driver />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
