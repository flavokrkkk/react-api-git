import { Layout } from "antd";
import Navbar from "./Components/UI/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRoutes />
      </Layout.Content>
    </Layout>
  );
};

export default App;
