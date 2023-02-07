import AdminRoot from "../components/admin/admin-root";
import MainRoot from "../components/site/main-root";
import DashBoard from "../pages/admin/dashboard";
import AboutPage from "../pages/site/about";
import HomePage from "../pages/site/home";
import NotFoundPage from "../pages/site/not-found-page";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin/",
        element: <DashBoard />,
      },
      // {
      //   path: "users",
      //   element: <UsersListPage />,
      // },
      // {
      //   path: "products",
      //   element: <ProductsListPage />,
      // },
    ],
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "/signup",
  //   element: <SignupPage />,
  // },
];

export default ROUTES;
