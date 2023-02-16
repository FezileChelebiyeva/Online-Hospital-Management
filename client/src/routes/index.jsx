import AdminRoot from "../components/admin/admin-root";
import MainRoot from "../components/site/main-root";
import DashBoard from "../pages/admin/dashboard";
import AboutPage from "../pages/site/about";
import BlogsPage from "../pages/site/blogs";
import ContactPage from "../pages/site/contact";
import DepartmentsPage from "../pages/site/departments";
import DoctorDetailsPage from "../pages/site/details-page";
import DoctorsTeam from "../pages/site/doctors-team";
import FaqsPage from "../pages/site/faqs";
import HomePage from "../pages/site/home";
import NotFoundPage from "../pages/site/not-found-page";
import PrivacyPolicy from "../pages/site/privacy-policy";
import LoginPage from "../pages/site/sign-in";
import SignupPage from "../pages/site/sign-up";
import TermsPolicy from "../pages/site/terms-policy";

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
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/details-doctor/:id",
        element: <DoctorDetailsPage />,
      },
      {
        path: "/doctors-team",
        element: <DoctorsTeam />,
      },
      {
        path: "/departments",
        element: <DepartmentsPage />,
      },
      {
        path: "/faqs",
        element: <FaqsPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/terms-policy",
        element: <TermsPolicy />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
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
];

export default ROUTES;
