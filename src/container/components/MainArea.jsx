import UserPage from "../pages/transportAndLogistics/UserPage";
import OrderPage from "../pages/transportAndLogistics/OrderPage";
import DriverPage from "../pages/transportAndLogistics/DriverPage";
import TransportAndLogisticsHomePage from "../pages/transportAndLogistics/TransportAndLogisticsHomePage";

function MainArea({ displayTab }) {
  if (displayTab === "transportAndLogistics") {
    return <TransportAndLogisticsHomePage />;
  }

  if (displayTab === "User") {
    return <UserPage />;
  }

  if (displayTab === "Order") {
    return <OrderPage />;
  }
  if (displayTab === "Driver") {
    return <DriverPage />;
  }
}
export default MainArea;
