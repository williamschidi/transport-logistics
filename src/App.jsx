import { BrowserRouter } from "react-router-dom";
import Layout from "./container/pages/Layout";
import AppRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Layout />
      </AppRoutes>
    </BrowserRouter>
  );
}

export default App;
