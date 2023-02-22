import AdminRoot from "../components/admin/admin-root";
import MainRoot from "../components/site/main-root";
import AddDoctor from "../pages/admin/add-doctor";
import AddPatient from "../pages/admin/add-patient";
import DashBoard from "../pages/admin/dashboard";
import DoctorsList from "../pages/admin/doctors-lists";
import PatientsList from "../pages/admin/patients-list";
import SignInForAdmin from "../pages/sign-in-admin";
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
import WishListPage from "../pages/site/wishlist";

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
        path: "/wishlist",
        element: <WishListPage />,
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
      {
        path: "doctors-list",
        element: <DoctorsList />,
      },
      {
        path: "patients-list",
        element: <PatientsList />,
      },
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "add-patient",
        element: <AddPatient />,
      },
    ],
  },
  {
    path: "/sign-in-admin/",
    element: <SignInForAdmin />,
  },
];

export default ROUTES;
