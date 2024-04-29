import { Layout } from "antd";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const App = () => {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username") } as IUser);
      setIsAuth(true);
    }
  }, []);

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
