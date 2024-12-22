import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Progress from "../components/loading/Progress";
import { rootPaths, adminPaths, authRoot } from "../routes/paths.js";
import PageLoader from "../components/loading/PageLoader";
import SignIn from "../pages/authendication/SignIn";
import SignUp from "../pages/authendication/SignUp";
import Page404 from "../pages/error-page/Page404";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EventPage from "../pages/events/EventPage";
import UserForm from "../pages/user-registration/UserForm";
import EventCreationPage from "../pages/EventCreation/EventCreationPage";
import { ToastContainer } from "react-bootstrap";

// Lazy Loaded Components
const App = lazy(() => import("../App"));
const MainLayout = lazy(() =>
  import("../components/layouts/main-layout/MainLayout")
);

export const routes = [
  {
    element: (
      <Suspense fallback={<Progress />}>
        <ToastContainer
          position="top-right"
          autoClose={5000} // Auto close after 5 seconds
          hideProgressBar={false}
          newestOnTop={true}
        />
        <App />
      </Suspense>
    ),
    children: [
      // User routes
      {
        path: rootPaths.root,
        element: (
          <Suspense fallback={<PageLoader />}>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: rootPaths.events,
            element: <EventPage />,
          },
          {
            path: rootPaths.userRegister,
            element: <UserForm />,
          },
        ],
      },

      // Admin routes
      {
        path: adminPaths.root,
        element: (
          <Suspense fallback={<PageLoader />}>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </Suspense>
        ),
        children: [
          {
            path: adminPaths.events,
            element: <EventPage />, // You can change this to your admin-specific event page
          },
          {
            path: adminPaths.eventCreate,
            element: <EventCreationPage />,
          },
          {
            path: adminPaths.users,
            element: <UserForm />, // Modify as per your user management requirements
          },
          {
            path: adminPaths.userCreate,
            element: <UserForm />,
          },
        ],
      },

      // Authentication routes
      {
        path: rootPaths.authRoot,
        element: <MainLayout />,
        children: [
          {
            path: authRoot.signin,
            element: <SignIn />,
          },
          {
            path: authRoot.signup,
            element: <SignUp />,
          },
        ],
      },

      // Error Page
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
