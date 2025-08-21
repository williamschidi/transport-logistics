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
import TransportMain from "./container/pages/transportAndLogistics/TransportMain";
import JusioMlm from "./container/pages/jusioMlm/JusioMlm";
import Chat from "./container/pages/jusioMlm/Chat";
import Library from "./container/pages/jusioMlm/Library";
import Blocks from "./container/pages/jusioMlm/Blocks";
import JusioIndex from "./container/pages/jusioMlm/JusioIndex";
import Dashbord from "./container/pages/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="transport-and-logistics"
          element={<TransportAndLogistics />}
        >
          <Route index element={<TransportMain />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/:companyID" element={<Profile />}>
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
            path="companies/:companyID/employees-details"
            element={<EmployeeDetails />}
          />

          <Route path="user" element={<User />} />
          <Route path="order" element={<Order />} />
          <Route path="driver" element={<Driver />} />
        </Route>
        <Route index element={<Dashbord />} />
        <Route path="jusio-mlm" element={<JusioMlm />}>
          <Route index element={<JusioIndex />} />
          <Route path="chat" element={<Chat />} />
          <Route path="library" element={<Library />} />
          <Route path="block" element={<Blocks />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
