import { Navbar } from "./components/NavBar.jsx";
import { MainRouter } from "./router/MainRouter.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <Navbar />
      <MainRouter />
      <ToastContainer />
    </>
  );
};
