import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes";
import { useSelector } from "react-redux";

const router = createBrowserRouter(ROUTES);
function App() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className={darkMode.value ? "App" : "DarkMode"}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
